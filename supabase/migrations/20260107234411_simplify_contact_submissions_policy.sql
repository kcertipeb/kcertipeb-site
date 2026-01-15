/*
  # Simplify contact submissions policy

  1. Changes
    - Remove overly strict RLS policy
    - Add simpler policy that allows public inserts with basic validation
    - Keeps data validation more flexible
  
  2. Security
    - Still validates required fields are not null
    - Removes strict length and format checks that may cause issues
*/

DROP POLICY IF EXISTS "Allow validated contact form submissions" ON contact_submissions;

CREATE POLICY "Allow public contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (
    name IS NOT NULL 
    AND email IS NOT NULL 
    AND phone IS NOT NULL 
    AND property_type IS NOT NULL 
    AND address IS NOT NULL
  );