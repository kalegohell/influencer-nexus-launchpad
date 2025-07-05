
-- First, let's insert the admin user directly into auth.users (this simulates a signup)
-- We'll use a UUID that we can reference
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  role,
  aud,
  confirmation_token,
  recovery_token,
  email_change_token_new,
  email_change_token_current,
  raw_app_meta_data,
  raw_user_meta_data,
  is_sso_user,
  deleted_at
) VALUES (
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'::uuid,
  '00000000-0000-0000-0000-000000000000',
  'kalegohell@gmail.com',
  crypt('AdminPass123!', gen_salt('bf')),
  now(),
  now(),
  now(),
  'authenticated',
  'authenticated',
  '',
  '',
  '',
  '',
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Admin User"}',
  false,
  null
) ON CONFLICT (email) DO UPDATE SET
  encrypted_password = crypt('AdminPass123!', gen_salt('bf')),
  updated_at = now();

-- Now create/update the profile for this admin user
INSERT INTO public.profiles (
  id,
  email,
  full_name,
  user_type,
  created_at,
  updated_at
) VALUES (
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'::uuid,
  'kalegohell@gmail.com',
  'Admin User',
  'admin',
  now(),
  now()
) ON CONFLICT (id) DO UPDATE SET
  user_type = 'admin',
  email = 'kalegohell@gmail.com',
  full_name = 'Admin User',
  updated_at = now();
