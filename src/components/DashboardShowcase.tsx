import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  return;
};
export default DashboardShowcase;