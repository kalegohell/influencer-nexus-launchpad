
import React from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminDashboard } from "@/components/AdminDashboard";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AdminSidebar />
          <SidebarInset className="flex-1">
            <AdminDashboard />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Admin;
