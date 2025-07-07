
-- Add new columns to influencer_applications table for the refined form fields
ALTER TABLE public.influencer_applications 
ADD COLUMN IF NOT EXISTS contact_number TEXT,
ADD COLUMN IF NOT EXISTS instagram_handle TEXT,
ADD COLUMN IF NOT EXISTS youtube_handle TEXT,
ADD COLUMN IF NOT EXISTS tiktok_handle TEXT,
ADD COLUMN IF NOT EXISTS twitter_handle TEXT,
ADD COLUMN IF NOT EXISTS linkedin_handle TEXT,
ADD COLUMN IF NOT EXISTS content_types TEXT[],
ADD COLUMN IF NOT EXISTS barter_available BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS min_rate DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS max_rate DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS follower_range TEXT,
ADD COLUMN IF NOT EXISTS collaboration_types TEXT[];

-- Update the social_media_handles column structure to accommodate new data
-- We'll keep it as JSONB for flexibility while also having dedicated columns
