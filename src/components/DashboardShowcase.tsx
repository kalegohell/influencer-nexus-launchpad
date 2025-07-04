
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, Users, Target } from 'lucide-react';

const DashboardShowcase = () => {
  const showcaseItems = [{
    id: 1,
    headline: "Activate AI-Powered Influencer Matching That Actually Works",
    subheadline: "Stop wasting time on mismatched partnerships. Our AI analyzes 50+ data points to find your perfect influencer matches in seconds.",
    stats: [{
      label: "Match Accuracy",
      value: "95%"
    }, {
      label: "Time Saved",
      value: "20hrs/week"
    }, {
      label: "ROI Increase",
      value: "300%"
    }],
    icon: <Target className="w-6 h-6" />
  }, {
    id: 2,
    headline: "Accelerate Campaign Performance with Real-Time Analytics",
    subheadline: "Watch your campaigns come alive with instant metrics. Track engagement, conversions, and ROI as they happen - not days later.",
    stats: [{
      label: "Live Tracking",
      value: "24/7"
    }, {
      label: "Data Points",
      value: "100+"
    }, {
      label: "Report Speed",
      value: "Instant"
    }],
    icon: <BarChart3 className="w-6 h-6" />
  }, {
    id: 3,
    headline: "Amplify Your Reach with Verified Creator Network",
    subheadline: "Access our exclusive network of 50,000+ verified influencers across every niche. No fake followers, no bot engagement - just authentic creators.",
    stats: [{
      label: "Verified Creators",
      value: "50K+"
    }, {
      label: "Fraud Protection",
      value: "99.9%"
    }, {
      label: "Global Reach",
      value: "190 Countries"
    }],
    icon: <Users className="w-6 h-6" />
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Influencer Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven influencer marketing with our comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.headline}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.subheadline}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {item.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
