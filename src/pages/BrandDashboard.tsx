
import React from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { BrandCampaignManager } from "@/components/BrandCampaignManager";

const BrandDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <DashboardSidebar />
          <SidebarInset className="flex-1">
            <BrandCampaignManager />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default BrandDashboard;
