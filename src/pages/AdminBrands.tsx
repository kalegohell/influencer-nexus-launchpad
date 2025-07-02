
import React from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { BrandManagement } from "@/components/BrandManagement";

const AdminBrands = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AdminSidebar />
          <SidebarInset className="flex-1">
            <BrandManagement />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminBrands;
