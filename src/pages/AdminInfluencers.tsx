
import React from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import InfluencerApplicationsList from "@/components/InfluencerApplicationsList";

const AdminInfluencers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AdminSidebar />
          <SidebarInset className="flex-1">
            <InfluencerApplicationsList />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminInfluencers;
