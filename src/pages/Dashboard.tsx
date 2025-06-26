
import React from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardContent } from "@/components/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <SidebarInset className="flex-1">
            <DashboardContent />
          </SidebarInset>
          <DashboardSidebar />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
