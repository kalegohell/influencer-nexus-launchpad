
-- Remove the previous problematic migration content
-- This migration is now used just to clean up and prepare for proper admin setup

-- Ensure we have the make_user_admin function for admin setup
CREATE OR REPLACE FUNCTION public.make_user_admin(user_email text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_record record;
BEGIN
  -- Find the user by email
  SELECT id INTO user_record FROM auth.users WHERE email = user_email;
  
  IF user_record.id IS NOT NULL THEN
    -- Update the profile with admin role
    UPDATE public.profiles 
    SET user_type = 'admin', updated_at = now()
    WHERE id = user_record.id;
    
    -- If no profile exists, create one
    IF NOT FOUND THEN
      INSERT INTO public.profiles (id, email, user_type, full_name)
      VALUES (user_record.id, user_email, 'admin', 'Admin User');
    END IF;
  END IF;
END;
$$;
