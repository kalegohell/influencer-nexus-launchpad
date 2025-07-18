import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Eye, Heart, DollarSign, Target, TrendingUp, Clock, Plus } from "lucide-react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { NewCampaignForm } from "@/components/NewCampaignForm";

interface Campaign {
  id: number;
  name: string;
  description: string;
  status: 'Active' | 'Completed' | 'Planning' | 'Draft' | 'Paused' | 'Pending';
  budget: number;
  spent: number;
  influencers: number;
  reach: number;
  engagement: number;
  likes: number;
  startDate: string;
  endDate: string;
  performance: string;
  influencerType?: 'micro' | 'macro' | 'mega';
  platforms?: string;
  targetAudience?: string;
  campaignGoals?: string;
}

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: "Summer Collection Launch",
      description: "Promote our new summer fashion line across social media platforms",
      status: "Active",
      budget: 25000,
      spent: 18500,
      influencers: 8,
      reach: 2400000,
      engagement: 156000,
      likes: 89000,
      startDate: "2024-06-01",
      endDate: "2024-07-15",
      performance: "High"
    },
    {
      id: 2,
      name: "Brand Awareness Drive",
      description: "Increase brand visibility among Gen Z audience",
      status: "Completed",
      budget: 15000,
      spent: 14200,
      influencers: 12,
      reach: 1800000,
      engagement: 124000,
      likes: 67000,
      startDate: "2024-05-01",
      endDate: "2024-05-31",
      performance: "Excellent"
    },
    {
      id: 3,
      name: "Product Review Series",
      description: "Authentic product reviews from lifestyle influencers",
      status: "Planning",
      budget: 20000,
      spent: 0,
      influencers: 5,
      reach: 0,
      engagement: 0,
      likes: 0,
      startDate: "2024-07-01",
      endDate: "2024-08-15",
      performance: "Pending"
    },
    {
      id: 4,
      name: "Holiday Campaign",
      description: "Festive season promotional campaign",
      status: "Draft",
      budget: 35000,
      spent: 0,
      influencers: 0,
      reach: 0,
      engagement: 0,
      likes: 0,
      startDate: "2024-12-01",
      endDate: "2024-12-31",
      performance: "Not Started"
    },
    {
      id: 5,
      name: "Fitness Challenge",
      description: "30-day fitness challenge with health influencers",
      status: "Active",
      budget: 30000,
      spent: 22000,
      influencers: 6,
      reach: 1900000,
      engagement: 98000,
      likes: 45000,
      startDate: "2024-06-15",
      endDate: "2024-07-31",
      performance: "Medium"
    },
    {
      id: 6,
      name: "Tech Product Launch",
      description: "Launch campaign for new smartphone accessories",
      status: "Paused",
      budget: 18000,
      spent: 8500,
      influencers: 4,
      reach: 950000,
      engagement: 42000,
      likes: 28000,
      startDate: "2024-05-15",
      endDate: "2024-06-30",
      performance: "Low"
    }
  ]);

  const handleNewCampaign = (formData: any) => {
    const newCampaign: Campaign = {
      id: campaigns.length + 1,
      name: formData.title,
      description: formData.description,
      status: 'Pending',
      budget: formData.budget,
      spent: 0,
      influencers: 0,
      reach: 0,
      engagement: 0,
      likes: 0,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + formData.duration * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      performance: 'Awaiting Approval',
      influencerType: formData.influencerType,
      platforms: formData.platforms,
      targetAudience: formData.targetAudience,
      campaignGoals: formData.campaignGoals
    };

    setCampaigns(prev => [newCampaign, ...prev]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Draft':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Paused':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'High':
      case 'Excellent':
        return 'text-green-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(num);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <DashboardSidebar />
          <SidebarInset className="flex-1">
            <div className="p-8">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Campaigns
                      </h1>
                      <p className="text-gray-600">
                        Manage and monitor all your influencer marketing campaigns
                      </p>
                    </div>
                    <NewCampaignForm onSubmit={handleNewCampaign} />
                  </div>
                </div>

                {/* Campaigns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {campaigns.map(campaign => (
                    <Card key={campaign.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden hover:border-gray-300 bg-slate-50">
                      <CardHeader className="pb-4 bg-transparent">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                              {campaign.name}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 line-clamp-2">
                              {campaign.description}
                            </CardDescription>
                          </div>
                          <Badge className={`ml-2 ${getStatusColor(campaign.status)} border font-medium`}>
                            {campaign.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                            {campaign.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Budget Info */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">Budget</span>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">
                              {formatCurrency(campaign.spent)} / {formatCurrency(campaign.budget)}
                            </p>
                            <p className="text-xs text-gray-500">
                              {campaign.budget > 0 ? Math.round(campaign.spent / campaign.budget * 100) : 0}% used
                            </p>
                          </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{campaign.influencers}</p>
                              <p className="text-xs text-gray-500">Influencers</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4 text-purple-500" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{formatNumber(campaign.reach)}</p>
                              <p className="text-xs text-gray-500">Reach</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Heart className="w-4 h-4 text-pink-500" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{formatNumber(campaign.likes)}</p>
                              <p className="text-xs text-gray-500">Likes</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-orange-500" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{formatNumber(campaign.engagement)}</p>
                              <p className="text-xs text-gray-500">Engagement</p>
                            </div>
                          </div>
                        </div>

                        {/* Campaign Dates */}
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                          </span>
                        </div>

                        {/* Additional info for pending campaigns */}
                        {campaign.status === 'Pending' && (
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                            <p className="text-sm text-orange-800 font-medium mb-1">Awaiting Agency Approval</p>
                            <p className="text-xs text-orange-600">
                              Your campaign is being reviewed by our team. You'll be notified once it's approved.
                            </p>
                          </div>
                        )}

                        {/* Performance Indicator */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <span className="text-sm text-gray-600">Performance</span>
                          <span className={`text-sm font-medium ${getPerformanceColor(campaign.performance)}`}>
                            {campaign.performance}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1 text-xs bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                            View Details
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 text-xs bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            disabled={campaign.status === 'Pending'}
                          >
                            {campaign.status === 'Pending' ? 'Pending' : 'Edit'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Campaigns;
