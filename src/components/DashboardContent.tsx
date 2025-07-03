
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, MessageSquare, TrendingUp, Plus, Eye, Heart, DollarSign, Target } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { NewCampaignForm } from "@/components/NewCampaignForm";

export function DashboardContent() {
  // For new brands, we'll show zero metrics until they have active campaigns
  // In a real app, this would come from your database
  const hasActiveCampaigns = false; // This would be determined by checking if user has any live campaigns
  
  // Show zero metrics for new brands, real data for brands with active campaigns
  const activeCampaigns = hasActiveCampaigns ? useCountUp(24, 2000) : 0;
  const totalInfluencers = hasActiveCampaigns ? useCountUp(156, 2200) : 0;
  const totalViews = hasActiveCampaigns ? useCountUp(2400000, 2500) : 0;
  const totalLikes = hasActiveCampaigns ? useCountUp(89000, 2300) : 0;
  const engagementRatio = hasActiveCampaigns ? useCountUp(4.2, 2400) : 0;
  const amountSpent = hasActiveCampaigns ? useCountUp(125000, 2600) : 0;

  const mainStats = [
    {
      title: 'Active Campaigns',
      value: activeCampaigns,
      change: hasActiveCampaigns ? '+12% from last month' : 'Start your first campaign',
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Influencers',
      value: totalInfluencers,
      change: hasActiveCampaigns ? '+8% from last month' : 'No influencers yet',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Total Views',
      value: totalViews.toLocaleString(),
      change: hasActiveCampaigns ? '+23% from last month' : 'No views yet',
      icon: Eye,
      color: 'bg-purple-500'
    },
    {
      title: 'Total Likes',
      value: totalLikes.toLocaleString(),
      change: hasActiveCampaigns ? '+15% from last month' : 'No engagement yet',
      icon: Heart,
      color: 'bg-pink-500'
    },
    {
      title: 'Engagement Ratio',
      value: engagementRatio + '%',
      change: hasActiveCampaigns ? '+0.3% from last month' : 'No data available',
      icon: TrendingUp,
      color: 'bg-orange-500'
    },
    {
      title: 'Amount Spent',
      value: '$' + amountSpent.toLocaleString(),
      change: hasActiveCampaigns ? '+18% from last month' : 'No spending yet',
      icon: DollarSign,
      color: 'bg-emerald-500'
    }
  ];

  const handleNewCampaign = (data: any) => {
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
                {hasActiveCampaigns 
                  ? "Monitor your influencer marketing performance and campaigns"
                  : "Welcome! Create your first campaign to start tracking your influencer marketing performance"
                }
              </p>
            </div>
            <NewCampaignForm onSubmit={handleNewCampaign} />
          </div>
        </div>

        {/* Welcome message for new brands */}
        {!hasActiveCampaigns && (
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Get Started with Your First Campaign</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Your dashboard will come to life once you launch your first influencer marketing campaign. 
              Click "Create Campaign" above to get started and begin tracking real performance metrics.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              <span className="bg-white px-3 py-1 rounded-full border">📊 Real-time Analytics</span>
              <span className="bg-white px-3 py-1 rounded-full border">🎯 Campaign Tracking</span>
              <span className="bg-white px-3 py-1 rounded-full border">📈 ROI Measurement</span>
            </div>
          </div>
        )}

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
                  <p className={`text-xs ${hasActiveCampaigns ? 'text-green-600' : 'text-gray-500'}`}>
                    {stat.change}
                  </p>
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
              <CardDescription>
                {hasActiveCampaigns ? "Your latest influencer marketing campaigns" : "No campaigns yet"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {hasActiveCampaigns ? (
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
              ) : (
                <div className="text-center py-8">
                  <div className="bg-gray-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-4">No campaigns created yet</p>
                  <p className="text-sm text-gray-400">Create your first campaign to see it here</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Top Performing Influencers</CardTitle>
              <CardDescription>
                {hasActiveCampaigns ? "Based on engagement and conversion rates" : "No influencer data yet"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {hasActiveCampaigns ? (
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
              ) : (
                <div className="text-center py-8">
                  <div className="bg-gray-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-4">No influencer data available</p>
                  <p className="text-sm text-gray-400">Start a campaign to see top performers here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
