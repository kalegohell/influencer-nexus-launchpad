
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
import { useLocation } from "react-router-dom";

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
    href: "/influencers"
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
  const location = useLocation();
  
  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = '/';
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname === href;
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
          {menuItems.map((item) => {
            const active = isActive(item.href);
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="w-full justify-start mb-1">
                  <a 
                    href={item.href} 
                    className={`relative flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                      active 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 transform scale-105' 
                        : 'hover:bg-gray-50 hover:scale-102'
                    }`}
                  >
                    {/* Active indicator line */}
                    <div className={`absolute left-0 top-0 h-full w-1 bg-white rounded-r-full transition-all duration-300 ${
                      active ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`} />
                    
                    {/* Icon with glow effect when active */}
                    <div className={`relative ${active ? 'drop-shadow-sm' : ''}`}>
                      <item.icon className={`w-5 h-5 transition-all duration-300 ${
                        active 
                          ? 'text-white' 
                          : 'text-gray-500 group-hover:text-blue-600'
                      }`} />
                      {/* Subtle glow effect for active icon */}
                      {active && (
                        <div className="absolute inset-0 w-5 h-5 bg-white rounded-full opacity-20 blur-sm" />
                      )}
                    </div>
                    
                    <span className={`font-medium transition-all duration-300 ${
                      active 
                        ? 'text-white font-semibold' 
                        : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {item.title}
                    </span>

                    {/* Shimmer effect for active items */}
                    {active && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                    )}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-100">
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-102"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
