
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      headline: "Activate AI-Powered Influencer Matching That Actually Works",
      subheadline: "Stop wasting time on mismatched partnerships. Our AI analyzes 50+ data points to find your perfect influencer matches in seconds.",
      stats: [
        {
          label: "Match Accuracy",
          value: "95%"
        },
        {
          label: "Time Saved", 
          value: "20hrs/week"
        },
        {
          label: "ROI Increase",
          value: "300%"
        }
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      headline: "Accelerate Campaign Performance with Real-Time Analytics",
      subheadline: "Watch your campaigns come alive with instant metrics. Track engagement, conversions, and ROI as they happen - not days later.",
      stats: [
        {
          label: "Live Tracking",
          value: "24/7"
        },
        {
          label: "Data Points",
          value: "100+"
        },
        {
          label: "Report Speed",
          value: "Instant"
        }
      ],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      id: 3,
      headline: "Amplify Your Reach with Verified Creator Network",
      subheadline: "Access our exclusive network of 50,000+ verified influencers across every niche. No fake followers, no bot engagement - just authentic creators.",
      stats: [
        {
          label: "Verified Creators",
          value: "50K+"
        },
        {
          label: "Fraud Protection",
          value: "99.9%"
        },
        {
          label: "Global Reach",
          value: "190 Countries"
        }
      ],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Influencer Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the power of data-driven influencer partnerships with our comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {showcaseItems.map((item, index) => (
            <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 bg-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.headline}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.subheadline}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {item.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
