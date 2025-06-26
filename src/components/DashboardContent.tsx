
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, MessageSquare, TrendingUp, Plus } from "lucide-react";

export function DashboardContent() {
  const stats = [
    {
      title: 'Active Campaigns',
      value: '12',
      change: '+2 from last month',
      icon: MessageSquare
    },
    {
      title: 'Total Influencers',
      value: '48',
      change: '+12 from last month',
      icon: Users
    },
    {
      title: 'Engagement Rate',
      value: '4.2%',
      change: '+0.5% from last month',
      icon: TrendingUp
    },
    {
      title: 'ROI',
      value: '320%',
      change: '+15% from last month',
      icon: BarChart3
    }
  ];

  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Brand Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your influencer marketing campaigns and track performance
              </p>
            </div>
            <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <IconComponent className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Recent Campaigns</CardTitle>
              <CardDescription>Your latest influencer marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Summer Collection Launch', status: 'Active', influencers: 8 },
                  { name: 'Brand Awareness Drive', status: 'Completed', influencers: 12 },
                  { name: 'Product Review Series', status: 'Planning', influencers: 5 }
                ].map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{campaign.name}</p>
                      <p className="text-sm text-gray-500">{campaign.influencers} influencers</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
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

          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Top Performing Influencers</CardTitle>
              <CardDescription>Based on engagement and conversion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Ahmed', followers: '125K', engagement: '5.2%' },
                  { name: 'Ali Hassan', followers: '89K', engagement: '4.8%' },
                  { name: 'Fatima Khan', followers: '156K', engagement: '4.1%' }
                ].map((influencer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
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
                    <span className="text-sm font-medium text-green-600">
                      {influencer.engagement}
                    </span>
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
