
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireUserType?: 'brand' | 'influencer' | 'admin';
}

const ProtectedRoute = ({ children, requireUserType }: ProtectedRouteProps) => {
  const { isAuthenticated, loading, user } = useAuth();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<any>(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/auth');
      return;
    }

    if (user && requireUserType) {
      // Fetch user profile to check user type
      const fetchUserProfile = async () => {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('user_type')
            .eq('id', user.id)
            .single();

          if (error) throw error;
          
          setUserProfile(data);
          
          // Check if user has required type
          if (data.user_type !== requireUserType) {
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
          navigate('/dashboard');
        } finally {
          setProfileLoading(false);
        }
      };

      fetchUserProfile();
    } else {
      setProfileLoading(false);
    }
  }, [isAuthenticated, loading, navigate, user, requireUserType]);

  if (loading || (requireUserType && profileLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
