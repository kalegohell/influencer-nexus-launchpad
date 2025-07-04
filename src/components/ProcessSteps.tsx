
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
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Achieve Marketing Excellence in 
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}4 Simple Steps
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to results, our proven process eliminates guesswork and maximizes your influencer marketing ROI. 
            Here's exactly how we help you dominate your market.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-xl h-full">
                  <CardContent className="p-6 md:p-8 text-center">
                    {/* Step number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-xl font-bold mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Highlight */}
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {step.highlight}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center lg:hidden mt-6 mb-2">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium mb-4">
            <Trophy className="w-4 h-4" />
            <span>Ready to dominate your market?</span>
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Join 5,000+ brands already achieving exceptional results with InfluenceX
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
