import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calendar, Filter, TrendingUp, Users, Eye, Heart, DollarSign, Target, Download } from 'lucide-react';
const Analytics = () => {
  const [timeRange, setTimeRange] = useState('6months');
  const [campaignFilter, setCampaignFilter] = useState('all');
  const [influencerType, setInfluencerType] = useState('all');

  // Mock data - in real app, this would come from API
  const performanceData = [{
    month: 'Jan',
    engagement: 4000,
    reach: 24000,
    conversions: 800,
    revenue: 12000,
    clicks: 3200
  }, {
    month: 'Feb',
    engagement: 5200,
    reach: 32000,
    conversions: 1200,
    revenue: 18000,
    clicks: 4100
  }, {
    month: 'Mar',
    engagement: 6800,
    reach: 45000,
    conversions: 1800,
    revenue: 27000,
    clicks: 5300
  }, {
    month: 'Apr',
    engagement: 8400,
    reach: 58000,
    conversions: 2400,
    revenue: 36000,
    clicks: 6800
  }, {
    month: 'May',
    engagement: 10200,
    reach: 72000,
    conversions: 3200,
    revenue: 48000,
    clicks: 8100
  }, {
    month: 'Jun',
    engagement: 12800,
    reach: 89000,
    conversions: 4100,
    revenue: 61500,
    clicks: 9600
  }];
  const campaignROIData = [{
    name: 'Fashion Week',
    spend: 15000,
    revenue: 180000,
    roi: 12,
    impressions: 2400000
  }, {
    name: 'Summer Launch',
    spend: 22000,
    revenue: 286000,
    roi: 13,
    impressions: 3200000
  }, {
    name: 'Back to School',
    spend: 18000,
    revenue: 234000,
    roi: 13,
    impressions: 2800000
  }, {
    name: 'Holiday 2024',
    spend: 25000,
    revenue: 375000,
    roi: 15,
    impressions: 4100000
  }];
  const influencerTypeData = [{
    name: 'Micro',
    value: 45,
    color: '#3B82F6'
  }, {
    name: 'Macro',
    value: 35,
    color: '#10B981'
  }, {
    name: 'Mega',
    value: 20,
    color: '#F59E0B'
  }];
  const platformData = [{
    platform: 'Instagram',
    reach: 45000,
    engagement: 8200,
    conversions: 1800
  }, {
    platform: 'TikTok',
    reach: 38000,
    engagement: 7800,
    conversions: 1600
  }, {
    platform: 'YouTube',
    reach: 28000,
    engagement: 5400,
    conversions: 1200
  }, {
    platform: 'Twitter',
    reach: 22000,
    engagement: 3600,
    conversions: 800
  }];
  const topInfluencers = [{
    name: 'Sarah Ahmed',
    followers: '125K',
    engagement: '5.2%',
    revenue: '$12.5K',
    campaigns: 3
  }, {
    name: 'Ali Hassan',
    followers: '89K',
    engagement: '4.8%',
    revenue: '$9.8K',
    campaigns: 2
  }, {
    name: 'Fatima Khan',
    followers: '156K',
    engagement: '4.1%',
    revenue: '$15.2K',
    campaigns: 4
  }, {
    name: 'Omar Ali',
    followers: '203K',
    engagement: '3.9%',
    revenue: '$18.7K',
    campaigns: 5
  }];

  // Calculate key metrics
  const totalMetrics = useMemo(() => {
    const latest = performanceData[performanceData.length - 1];
    const previous = performanceData[performanceData.length - 2];
    return {
      totalReach: latest.reach,
      reachGrowth: ((latest.reach - previous.reach) / previous.reach * 100).toFixed(1),
      totalEngagement: latest.engagement,
      engagementGrowth: ((latest.engagement - previous.engagement) / previous.engagement * 100).toFixed(1),
      totalRevenue: latest.revenue,
      revenueGrowth: ((latest.revenue - previous.revenue) / previous.revenue * 100).toFixed(1),
      avgROI: (campaignROIData.reduce((sum, campaign) => sum + campaign.roi, 0) / campaignROIData.length).toFixed(1)
    };
  }, [performanceData, campaignROIData]);
  const CustomTooltip = ({
    active,
    payload,
    label
  }: any) => {
    if (active && payload && payload.length) {
      return <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{label}</p>
          {payload.map((entry: any, index: number) => <p key={index} className="text-sm" style={{
          color: entry.color
        }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>)}
        </div>;
    }
    return null;
  };
  return <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600">Comprehensive insights into your influencer marketing performance</p>
            </div>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>

          {/* Filters */}
          
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Reach</p>
                  <p className="text-2xl font-bold">{totalMetrics.totalReach.toLocaleString()}</p>
                  <p className="text-blue-100 text-sm">+{totalMetrics.reachGrowth}% from last month</p>
                </div>
                <Eye className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Engagement</p>
                  <p className="text-2xl font-bold">{totalMetrics.totalEngagement.toLocaleString()}</p>
                  <p className="text-green-100 text-sm">+{totalMetrics.engagementGrowth}% from last month</p>
                </div>
                <Heart className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Revenue</p>
                  <p className="text-2xl font-bold">${totalMetrics.totalRevenue.toLocaleString()}</p>
                  <p className="text-purple-100 text-sm">+{totalMetrics.revenueGrowth}% from last month</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Average ROI</p>
                  <p className="text-2xl font-bold">{totalMetrics.avgROI}x</p>
                  <p className="text-orange-100 text-sm">Across all campaigns</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="influencers">Influencers</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement & Reach Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="reach" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="engagement" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue & Conversions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} />
                      <Line type="monotone" dataKey="conversions" stroke="#F59E0B" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Campaign ROI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={campaignROIData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="roi" fill="#10B981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {campaignROIData.map((campaign, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{campaign.name}</p>
                          <p className="text-sm text-gray-500">ROI: {campaign.roi}x</p>
                        </div>
                        <Badge variant="secondary">${campaign.revenue.toLocaleString()}</Badge>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="influencers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Influencer Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie data={influencerTypeData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
                        {influencerTypeData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Top Performing Influencers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topInfluencers.map((influencer, index) => <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
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
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={platformData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="platform" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="reach" fill="#3B82F6" name="Reach" />
                    <Bar dataKey="engagement" fill="#10B981" name="Engagement" />
                    <Bar dataKey="conversions" fill="#F59E0B" name="Conversions" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default Analytics;