
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, BarChart3, Shield, Zap, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "AI-Powered Matching",
      description: "Our advanced algorithm matches your brand with the perfect influencers based on audience overlap, engagement rates, and brand alignment.",
      advantage: "95% match accuracy"
    },
    {
      icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Real-Time Analytics",
      description: "Track campaign performance, engagement metrics, and ROI in real-time with our comprehensive dashboard and automated reporting.",
      advantage: "Live performance tracking"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Verified Creator Network",
      description: "Access our curated network of 50,000+ verified influencers across all niches with proven track records and authentic audiences.",
      advantage: "100% verified profiles"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Fraud Protection",
      description: "Advanced fraud detection prevents fake followers and ensures authentic engagement with comprehensive audience verification.",
      advantage: "99.9% authentic reach"
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Automated Workflows",
      description: "Streamline your campaigns with automated outreach, contract management, content approval, and payment processing.",
      advantage: "80% time savings"
    },
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Performance Optimization",
      description: "Continuous campaign optimization using machine learning to maximize engagement, conversions, and return on ad spend.",
      advantage: "12x average ROI"
    }
  ];

  const pakistaniBrands = [
    "Engro", "Fauji Group", "Lucky Cement", "Habib Bank", "MCB Bank", 
    "Unilever Pakistan", "Nestle Pakistan", "K&N's", "Gul Ahmed", 
    "Packages Limited", "Pakistan State Oil", "Jazz", "Telenor Pakistan",
    "Daraz", "Careem", "Foodpanda", "Sana Safinaz", "Khaadi"
  ];

  return (
    <section id="features" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Leading Brands Choose
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}InfluenceX
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge technology and data-driven insights to create influencer campaigns that actually convert. 
            Our platform eliminates guesswork and maximizes your marketing ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 rounded-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 p-2 bg-blue-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-gray-900 text-lg md:text-xl">{feature.title}</CardTitle>
                    <div className="text-sm text-blue-600 font-semibold">{feature.advantage}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social proof with moving Pakistani brands */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-500 mb-6 md:mb-8">Trusted by leading Pakistani brands</p>
          <div className="relative overflow-hidden bg-gradient-to-r from-transparent via-gray-50 to-transparent py-4 rounded-lg">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set of brands */}
              {pakistaniBrands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="inline-flex items-center justify-center mx-8 text-xl md:text-2xl font-bold text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  {brand}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {pakistaniBrands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="inline-flex items-center justify-center mx-8 text-xl md:text-2xl font-bold text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
