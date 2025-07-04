
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works: 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to results - our streamlined process makes influencer marketing effortless
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl font-bold text-blue-100 mb-4">
                      {step.number}
                    </div>
                    
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full text-white mb-6 mx-auto">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {step.highlight}
                    </div>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
