import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Sert les Netlify Functions pendant `npm run dev`.
 *
 * En production, Netlify expose `netlify/functions/*.js` sous `/.netlify/functions/<nom>`.
 * Le serveur de développement de Vite ne le fait pas : sans ce plugin, la page `/reserver`
 * recevrait un 404 au moment de charger les créneaux, et il faudrait installer netlify-cli
 * juste pour voir la page fonctionner.
 *
 * Le plugin ne s'active qu'en `serve` : il n'a aucun effet sur le build de production.
 */
function netlifyFunctionsDev(env: Record<string, string>): Plugin {
  const PREFIX = '/.netlify/functions/';

  return {
    name: 'netlify-functions-dev',
    apply: 'serve',
    configureServer(server) {
      // Les fonctions lisent leur configuration dans process.env, que Vite ne peuple pas.
      for (const [key, value] of Object.entries(env)) {
        if (process.env[key] === undefined) {
          process.env[key] = value;
        }
      }

      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith(PREFIX)) {
          return next();
        }

        const url = new URL(req.url, 'http://localhost');
        const name = url.pathname.slice(PREFIX.length);

        if (!/^[a-z0-9-]+$/i.test(name)) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Nom de fonction invalide' }));
          return;
        }

        try {
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(chunk as Buffer);
          }

          const module = await server.ssrLoadModule(`/netlify/functions/${name}.js`);
          const result = await module.handler({
            httpMethod: req.method ?? 'GET',
            queryStringParameters: Object.fromEntries(url.searchParams),
            headers: req.headers,
            body: chunks.length ? Buffer.concat(chunks).toString('utf8') : null,
          });

          res.statusCode = result?.statusCode ?? 200;
          for (const [key, value] of Object.entries(result?.headers ?? {})) {
            res.setHeader(key, String(value));
          }
          res.end(result?.body ?? '');
        } catch (error) {
          server.config.logger.error(`[netlify-functions-dev] ${name} : ${String(error)}`);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: String(error) }));
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Préfixe vide : charge aussi les variables sans `VITE_`, dont les fonctions ont besoin.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), netlifyFunctionsDev(env)],
    build: {
      target: 'es2019',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            icons: ['lucide-react'],
          },
        },
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
