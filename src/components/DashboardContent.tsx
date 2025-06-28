import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, MessageSquare, TrendingUp, Plus, Eye, Heart, DollarSign, Target } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { NewCampaignForm } from "@/components/NewCampaignForm";

export function DashboardContent() {
  // Animated counters for main metrics
  const activeCampaigns = useCountUp(24, 2000);
  const totalInfluencers = useCountUp(156, 2200);
  const totalViews = useCountUp(2400000, 2500);
  const totalLikes = useCountUp(89000, 2300);
  const engagementRatio = useCountUp(4.2, 2400);
  const amountSpent = useCountUp(125000, 2600);

  const mainStats = [
    {
      title: 'Active Campaigns',
      value: activeCampaigns,
      change: '+12% from last month',
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Influencers',
      value: totalInfluencers,
      change: '+8% from last month',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Total Views',
      value: totalViews.toLocaleString(),
      change: '+23% from last month',
      icon: Eye,
      color: 'bg-purple-500'
    },
    {
      title: 'Total Likes',
      value: totalLikes.toLocaleString(),
      change: '+15% from last month',
      icon: Heart,
      color: 'bg-pink-500'
    },
    {
      title: 'Engagement Ratio',
      value: engagementRatio + '%',
      change: '+0.3% from last month',
      icon: TrendingUp,
      color: 'bg-orange-500'
    },
    {
      title: 'Amount Spent',
      value: '$' + amountSpent.toLocaleString(),
      change: '+18% from last month',
      icon: DollarSign,
      color: 'bg-emerald-500'
    }
  ];

  const handleNewCampaign = (data: any) => {
    // This could be handled by a global state or parent component
    console.log('New campaign created:', data);
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard Overview
              </h1>
              <p className="text-gray-600">
                Monitor your influencer marketing performance and campaigns
              </p>
            </div>
            <NewCampaignForm onSubmit={handleNewCampaign} />
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mainStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border-0 shadow-sm rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Recent Campaigns</CardTitle>
              <CardDescription>Your latest influencer marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Summer Collection Launch', status: 'Active', influencers: 8, performance: 'High' },
                  { name: 'Brand Awareness Drive', status: 'Completed', influencers: 12, performance: 'Excellent' },
                  { name: 'Product Review Series', status: 'Planning', influencers: 5, performance: 'Pending' }
                ].map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-medium text-gray-900">{campaign.name}</p>
                      <p className="text-sm text-gray-500">{campaign.influencers} influencers • {campaign.performance}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Top Performing Influencers</CardTitle>
              <CardDescription>Based on engagement and conversion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Ahmed', followers: '125K', engagement: '5.2%', revenue: '$12.5K' },
                  { name: 'Ali Hassan', followers: '89K', engagement: '4.8%', revenue: '$9.8K' },
                  { name: 'Fatima Khan', followers: '156K', engagement: '4.1%', revenue: '$15.2K' }
                ].map((influencer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {influencer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{influencer.name}</p>
                        <p className="text-sm text-gray-500">{influencer.followers} followers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{influencer.engagement}</p>
                      <p className="text-xs text-gray-500">{influencer.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
