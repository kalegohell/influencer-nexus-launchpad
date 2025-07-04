import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, Handshake, BarChart, Trophy } from 'lucide-react';
const ProcessSteps = () => {
  const steps = [{
    number: "01",
    icon: <Search className="w-8 h-8" />,
    title: "Discover Perfect Matches",
    description: "Our AI scans 50,000+ verified influencers to find creators who align perfectly with your brand values, audience, and campaign goals.",
    highlight: "95% match accuracy"
  }, {
    number: "02",
    icon: <Handshake className="w-8 h-8" />,
    title: "Automate Outreach & Agreements",
    description: "Send personalized proposals, negotiate rates, and finalize contracts - all through our streamlined workflow system.",
    highlight: "80% faster setup"
  }, {
    number: "03",
    icon: <BarChart className="w-8 h-8" />,
    title: "Track Real-Time Performance",
    description: "Monitor every metric that matters: engagement rates, click-throughs, conversions, and ROI - updated in real-time.",
    highlight: "Live analytics"
  }, {
    number: "04",
    icon: <Trophy className="w-8 h-8" />,
    title: "Achieve Exceptional Results",
    description: "Watch your campaigns deliver measurable results with our optimization algorithms continuously improving performance.",
    highlight: "12x average ROI"
  }];
  return;
};
export default ProcessSteps;