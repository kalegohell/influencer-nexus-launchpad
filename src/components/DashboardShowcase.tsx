
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Users, Target, Zap } from 'lucide-react';

const DashboardShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      headline: "Activate AI-Powered Influencer Matching That Actually Works",
      subheadline: "Stop wasting time on mismatched partnerships. Our AI analyzes 50+ data points to find your perfect influencer matches in seconds.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
      stats: [
        { label: "Match Accuracy", value: "95%" },
        { label: "Time Saved", value: "20hrs/week" },
        { label: "ROI Increase", value: "300%" }
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      headline: "Accelerate Campaign Performance with Real-Time Analytics",
      subheadline: "Watch your campaigns come alive with instant metrics. Track engagement, conversions, and ROI as they happen - not days later.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      stats: [
        { label: "Live Tracking", value: "24/7" },
        { label: "Data Points", value: "100+" },
        { label: "Report Speed", value: "Instant" }
      ],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      id: 3,
      headline: "Amplify Your Reach with Verified Creator Network",
      subheadline: "Access our exclusive network of 50,000+ verified influencers across every niche. No fake followers, no bot engagement - just authentic creators.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop",
      stats: [
        { label: "Verified Creators", value: "50K+" },
        { label: "Fraud Protection", value: "99.9%" },
        { label: "Global Reach", value: "190 Countries" }
      ],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Automate Success with 
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}AI-Driven Insights
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading brands are transforming their influencer marketing with our intelligent platform. 
            These are real dashboards from real campaigns generating real results.
          </p>
        </div>

        {/* Showcase Items */}
        <div className="space-y-20 md:space-y-24">
          {showcaseItems.map((item, index) => (
            <div key={item.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600 p-2 bg-blue-50 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Dashboard Preview
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {item.headline}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.subheadline}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {item.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center space-x-2">
                  <span>See Full Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Dashboard Screenshot */}
              <div className="flex-1">
                <Card className="bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <img 
                      src={item.image} 
                      alt={`Dashboard preview ${item.id}`}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Live Dashboard</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600 font-medium">Active</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
