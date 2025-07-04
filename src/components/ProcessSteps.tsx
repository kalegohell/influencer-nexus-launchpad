
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, Handshake, BarChart, Trophy } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Discover Perfect Matches",
      description: "Our AI scans 50,000+ verified influencers to find creators who align perfectly with your brand values, audience, and campaign goals.",
      highlight: "95% match accuracy"
    },
    {
      number: "02",
      icon: <Handshake className="w-8 h-8" />,
      title: "Automate Outreach & Agreements",
      description: "Send personalized proposals, negotiate rates, and finalize contracts - all through our streamlined workflow system.",
      highlight: "80% faster setup"
    },
    {
      number: "03",
      icon: <BarChart className="w-8 h-8" />,
      title: "Track Real-Time Performance",
      description: "Monitor every metric that matters: engagement rates, click-throughs, conversions, and ROI - updated in real-time.",
      highlight: "Live analytics"
    },
    {
      number: "04",
      icon: <Trophy className="w-8 h-8" />,
      title: "Achieve Exceptional Results",
      description: "Watch your campaigns deliver measurable results with our optimization algorithms continuously improving performance.",
      highlight: "12x average ROI"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes influencer marketing simple and effective
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-bold text-blue-600 mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
