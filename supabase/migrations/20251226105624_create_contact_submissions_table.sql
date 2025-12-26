/*
  # Create Contact Submissions Table

  ## Overview
  This migration creates a table to store all contact form submissions from the website.
  Each submission includes customer details, property information, and timestamps.

  ## New Tables
  ### `contact_submissions`
  Stores all contact form submissions with the following columns:
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text, required) - Full name of the person submitting
  - `email` (text, required) - Email address for contact
  - `phone` (text, required) - Phone number
  - `property_type` (text, required) - Type of property (appartement, maison, audit)
  - `address` (text, required) - Full address of the property
  - `message` (text, optional) - Additional message or details
  - `email_sent` (boolean, default false) - Tracks if notification email was sent
  - `created_at` (timestamptz) - Timestamp when submission was created

  ## Security
  1. RLS is enabled on the table
  2. Public INSERT policy allows anonymous users to submit the form
  3. No SELECT policies - only admins can view submissions via direct database access
  
  ## Notes
  - The table is designed to be write-only from the public perspective
  - Email notifications will be handled by an Edge Function
  - All fields except message are required to ensure complete contact information
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  property_type text NOT NULL,
  address text NOT NULL,
  message text DEFAULT '',
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);