
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const performanceData = [
    { month: 'Jan', engagement: 4000, reach: 24000, conversions: 800 },
    { month: 'Feb', engagement: 5200, reach: 32000, conversions: 1200 },
    { month: 'Mar', engagement: 6800, reach: 45000, conversions: 1800 },
    { month: 'Apr', engagement: 8400, reach: 58000, conversions: 2400 },
    { month: 'May', engagement: 10200, reach: 72000, conversions: 3200 },
    { month: 'Jun', engagement: 12800, reach: 89000, conversions: 4100 }
  ];

  const roiData = [
    { campaign: 'Fashion Week', spend: 15000, revenue: 180000, roi: 12 },
    { campaign: 'Summer Launch', spend: 22000, revenue: 286000, roi: 13 },
    { campaign: 'Back to School', spend: 18000, revenue: 234000, roi: 13 },
    { campaign: 'Holiday 2024', spend: 25000, revenue: 375000, roi: 15 }
  ];

  return (
    <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data-Driven Results You Can
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Track & Trust
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our comprehensive analytics dashboard provides real-time insights into campaign performance, 
            audience engagement, and ROI metrics that matter to your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Engagement Trends */}
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-xl">Campaign Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="#3B82F6" 
                    fill="url(#engagementGradient)" 
                    strokeWidth={2}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="reach" 
                    stroke="#06B6D4" 
                    fill="url(#reachGradient)" 
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="reachGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* ROI Analysis */}
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-xl">ROI by Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="campaign" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Bar dataKey="roi" fill="url(#roiGradient)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0891B2" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md border-white/10">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">12.4x</div>
              <div className="text-white/80">Average ROI</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-slate-500/20 to-gray-500/20 backdrop-blur-md border-white/10">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">89%</div>
              <div className="text-white/80">Campaign Success Rate</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border-white/10">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">3.2M</div>
              <div className="text-white/80">Total Reach</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-md border-white/10">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80">Campaign Launch Time</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
