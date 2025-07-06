
-- Create influencer applications table
CREATE TABLE public.influencer_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  social_media_handles JSONB,
  follower_count INTEGER,
  engagement_rate DECIMAL(5,2),
  niche TEXT,
  portfolio_url TEXT,
  bio TEXT,
  location TEXT,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create campaigns table for brands
CREATE TABLE public.campaigns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  brand_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  budget DECIMAL(10,2),
  duration INTEGER,
  influencer_type TEXT CHECK (influencer_type IN ('micro', 'macro', 'mega')),
  target_audience TEXT,
  campaign_goals TEXT,
  content_type TEXT,
  platforms TEXT,
  timeline TEXT,
  kpis TEXT,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected', 'active', 'completed')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create approved influencers table (for those who get approved)
CREATE TABLE public.influencers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  application_id UUID REFERENCES public.influencer_applications(id),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  social_media_handles JSONB,
  follower_count INTEGER,
  engagement_rate DECIMAL(5,2),
  niche TEXT,
  portfolio_url TEXT,
  bio TEXT,
  location TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.influencer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.influencers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for influencer_applications
CREATE POLICY "Anyone can apply as influencer" 
  ON public.influencer_applications 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Admins can view all applications" 
  ON public.influencer_applications 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  );

CREATE POLICY "Admins can update applications" 
  ON public.influencer_applications 
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  );

-- RLS Policies for campaigns
CREATE POLICY "Brands can create campaigns" 
  ON public.campaigns 
  FOR INSERT 
  WITH CHECK (
    auth.uid() = brand_id AND 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND user_type = 'brand'
    )
  );

CREATE POLICY "Brands can view their own campaigns" 
  ON public.campaigns 
  FOR SELECT 
  USING (
    auth.uid() = brand_id OR
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  );

CREATE POLICY "Brands can update their own campaigns" 
  ON public.campaigns 
  FOR UPDATE 
  USING (
    auth.uid() = brand_id OR
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  );

CREATE POLICY "Admins can view all campaigns" 
  ON public.campaigns 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  );

-- RLS Policies for influencers
CREATE POLICY "Admins can manage influencers" 
  ON public.influencers 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  );

CREATE POLICY "Influencers can view their own profile" 
  ON public.influencers 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Update the handle_new_user function to handle user_type from metadata
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, user_type)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data->>'user_type', 'brand')
  );
  RETURN NEW;
END;
$$;
