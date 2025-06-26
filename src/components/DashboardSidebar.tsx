
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
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
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
    href: "#campaigns"
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
    <Sidebar side="right" className="border-l border-gray-200">
      <SidebarHeader className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Brand Portal</h2>
            <p className="text-sm text-gray-500">Welcome back!</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="w-full justify-start">
                <a href={item.href} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
