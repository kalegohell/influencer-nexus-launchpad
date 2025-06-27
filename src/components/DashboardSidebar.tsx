
import React from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Settings, 
  CreditCard, 
  FileText,
  LogOut,
  TrendingUp,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Overview",
    icon: Home,
    href: "/dashboard"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "#analytics"
  },
  {
    title: "Influencers",
    icon: Users,
    href: "#influencers"
  },
  {
    title: "Campaigns",
    icon: MessageSquare,
    href: "/campaigns"
  },
  {
    title: "Reports",
    icon: FileText,
    href: "#reports"
  },
  {
    title: "Billing",
    icon: CreditCard,
    href: "#billing"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#settings"
  }
];

export function DashboardSidebar() {
  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = '/';
  };

  return (
    <Sidebar side="left" className="border-r border-gray-100 bg-white">
      <SidebarHeader className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 text-lg">Brand Portal</h2>
            <p className="text-sm text-gray-500">Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="w-full justify-start mb-1">
                <a href={item.href} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <item.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  <span className="text-gray-700 font-medium group-hover:text-gray-900">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-100">
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
