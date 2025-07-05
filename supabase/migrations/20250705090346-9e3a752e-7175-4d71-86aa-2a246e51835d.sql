
-- Insert an admin user into the profiles table
-- You'll need to sign up with this email first, then we'll update the user_type
INSERT INTO public.profiles (id, email, full_name, user_type) 
VALUES (
  -- This will be updated after you sign up
  '00000000-0000-0000-0000-000000000000'::uuid, 
  'admin@example.com', 
  'Admin User', 
  'admin'
) 
ON CONFLICT (id) DO UPDATE SET user_type = 'admin';

-- Create a function to make any user an admin by email
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
    -- Update or insert the profile with admin role
    INSERT INTO public.profiles (id, email, user_type)
    VALUES (user_record.id, user_email, 'admin')
    ON CONFLICT (id) DO UPDATE SET user_type = 'admin';
  END IF;
END;
$$;
