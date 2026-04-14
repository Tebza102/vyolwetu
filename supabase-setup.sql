-- Vyolwetu Database Schema - Updated
-- Run this SQL in your Supabase SQL Editor

-- Drop existing tables if they exist (for fresh start)
DROP TABLE IF EXISTS quotes CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS csi_initiatives CASCADE;

-- Create quotes table (stores all quote form submissions)
CREATE TABLE quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  location TEXT DEFAULT '',
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT DEFAULT '',
  division TEXT NOT NULL CHECK (division IN ('waste_management', 'cleaning', 'construction', 'csi')),
  location TEXT DEFAULT '',
  images TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create csi_initiatives table
CREATE TABLE csi_initiatives (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  pillar TEXT NOT NULL CHECK (pillar IN ('environment', 'community', 'skills')),
  image_url TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE csi_initiatives ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public can read quotes" ON quotes FOR SELECT USING (true);
CREATE POLICY "Public can read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public can read csi_initiatives" ON csi_initiatives FOR SELECT USING (true);

-- Public insert access (so your website can submit quotes)
CREATE POLICY "Public can insert quotes" ON quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert projects" ON projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert csi_initiatives" ON csi_initiatives FOR INSERT WITH CHECK (true);

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('vyolwetu-images', 'vyolwetu-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
DROP POLICY IF EXISTS "Public can view images" ON storage.objects;
DROP POLICY IF EXISTS "Public can upload images" ON storage.objects;

CREATE POLICY "Public can view images" ON storage.objects 
FOR SELECT USING (bucket_id = 'vyolwetu-images');

CREATE POLICY "Public can upload images" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'vyolwetu-images');

-- Insert sample project data
INSERT INTO projects (title, slug, description, division, location) VALUES
('Commercial Building Cleaning', 'commercial-building-cleaning', 'Complete cleaning services for a 20-story commercial building in Johannesburg CBD.', 'cleaning', 'Johannesburg CBD'),
('Industrial Waste Management', 'industrial-waste-management', 'Responsible waste collection and recycling for a manufacturing facility in Mpumalanga.', 'waste_management', 'Mpumalanga'),
('Site Clearing & Development', 'site-clearing-development', 'Complete site clearing and preparation for new commercial development.', 'construction', 'Gauteng'),
('Office Sanitization Services', 'office-sanitization', 'Regular sanitization and hygiene services for corporate offices in Sandton.', 'cleaning', 'Sandton'),
('Construction Site Waste Clearance', 'construction-waste-clearance', 'Efficient waste management and clearing for construction sites.', 'waste_management', 'Pretoria'),
('Housing Development Project', 'housing-development', 'Residential housing development from foundation to completion.', 'construction', 'Midrand');

-- Insert sample CSI data
INSERT INTO csi_initiatives (title, description, pillar) VALUES
('Community Clean-up Campaigns', 'Regular clean-up drives in underserved communities to improve local environments.', 'environment'),
('Youth Skills Workshop', 'Providing practical skills training to unemployed youth in our operating areas.', 'skills'),
('Local Employment Creation', 'Creating job opportunities for community members in our service delivery.', 'community'),
('Recycling Education', 'Educating communities about the importance of recycling and proper waste separation.', 'environment'),
('Women Empowerment Program', 'Supporting women entrepreneurs in waste management and cleaning services.', 'community'),
('School Education Program', 'Teaching children about environmental responsibility and waste management.', 'environment');

-- Create index for performance
CREATE INDEX idx_quotes_status ON quotes(status);
CREATE INDEX idx_quotes_created ON quotes(created_at DESC);
CREATE INDEX idx_projects_division ON projects(division);
CREATE INDEX idx_csi_pillar ON csi_initiatives(pillar);

-- Add a function to view recent quotes easily
CREATE OR REPLACE VIEW recent_quotes AS
SELECT 
  id,
  name,
  email,
  phone,
  service,
  location,
  message,
  status,
  created_at
FROM quotes
ORDER BY created_at DESC;

-- Grant permissions to service role (for API)
GRANT ALL ON quotes TO service_role;
GRANT ALL ON projects TO service_role;
GRANT ALL ON csi_initiatives TO service_role;
GRANT ALL ON storage.objects TO service_role;