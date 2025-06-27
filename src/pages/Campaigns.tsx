
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Eye, Heart, DollarSign, Target, TrendingUp, Plus } from "lucide-react";

const Campaigns = () => {
  
  const campaigns = [
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
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-900 text-green-100 border-green-700';
      case 'Completed':
        return 'bg-blue-900 text-blue-100 border-blue-700';
      case 'Planning':
        return 'bg-yellow-900 text-yellow-100 border-yellow-700';
      case 'Draft':
        return 'bg-gray-700 text-gray-100 border-gray-600';
      case 'Paused':
        return 'bg-red-900 text-red-100 border-red-700';
      default:
        return 'bg-gray-700 text-gray-100 border-gray-600';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'High':
      case 'Excellent':
        return 'text-green-400';
      case 'Medium':
        return 'text-yellow-400';
      case 'Low':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(num);
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Campaigns
              </h1>
              <p className="text-muted-foreground">
                Manage and monitor all your influencer marketing campaigns
              </p>
            </div>
            <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 rounded-xl px-6">
              <Plus className="w-4 h-4 mr-2" />
              Create Campaign
            </Button>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="bg-black border border-gray-800 shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden hover:border-gray-700">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-white mb-2">
                      {campaign.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-400 line-clamp-2">
                      {campaign.description}
                    </CardDescription>
                  </div>
                  <Badge className={`ml-2 ${getStatusColor(campaign.status)} border`}>
                    {campaign.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Budget Info */}
                <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-gray-300">Budget</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">
                      {formatCurrency(campaign.spent)} / {formatCurrency(campaign.budget)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {campaign.budget > 0 ? Math.round((campaign.spent / campaign.budget) * 100) : 0}% used
                    </p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{campaign.influencers}</p>
                      <p className="text-xs text-gray-500">Influencers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{formatNumber(campaign.reach)}</p>
                      <p className="text-xs text-gray-500">Reach</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-pink-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{formatNumber(campaign.likes)}</p>
                      <p className="text-xs text-gray-500">Likes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{formatNumber(campaign.engagement)}</p>
                      <p className="text-xs text-gray-500">Engagement</p>
                    </div>
                  </div>
                </div>

                {/* Campaign Dates */}
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Performance Indicator */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                  <span className="text-sm text-gray-400">Performance</span>
                  <span className={`text-sm font-medium ${getPerformanceColor(campaign.performance)}`}>
                    {campaign.performance}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
