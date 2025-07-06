
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardContent } from "@/components/DashboardContent";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      // Check user type and redirect to appropriate dashboard
      const checkUserType = async () => {
        try {
          const { data, error } = await supabase
            .from('profiles') 
            .select('user_type')
            .eq('id', user.id)
            .single();

          if (error) throw error;

          // Redirect based on user type
          if (data.user_type === 'admin') {
            navigate('/admin');
          } else if (data.user_type === 'brand') {
            navigate('/brand-dashboard');
          } else if (data.user_type === 'influencer') {
            navigate('/influencer-restricted');
          }
        } catch (error) {
          console.error('Error checking user type:', error);
        } finally {
          setLoading(false);
        }
      };

      checkUserType();
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <DashboardSidebar />
          <SidebarInset className="flex-1">
            <DashboardContent />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
