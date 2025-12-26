/*
  # Fix Contact Submissions RLS Policy

  ## Changes
  - Drop existing restrictive policy
  - Create new policy that allows public anonymous access for INSERT operations
  - This ensures the contact form works for all visitors without authentication

  ## Security Note
  - The INSERT-only policy is safe as it only allows form submissions
  - No SELECT policies exist, so data remains private
  - Only administrators can view submissions via direct database access
*/

-- Drop the existing policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create a more permissive policy for anonymous users
CREATE POLICY "Enable insert for anonymous users"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);