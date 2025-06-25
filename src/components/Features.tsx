
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, BarChart3, Shield, Zap, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Our advanced algorithm matches your brand with the perfect influencers based on audience overlap, engagement rates, and brand alignment.",
      advantage: "95% match accuracy"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Track campaign performance, engagement metrics, and ROI in real-time with our comprehensive dashboard and automated reporting.",
      advantage: "Live performance tracking"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Verified Creator Network",
      description: "Access our curated network of 50,000+ verified influencers across all niches with proven track records and authentic audiences.",
      advantage: "100% verified profiles"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fraud Protection",
      description: "Advanced fraud detection prevents fake followers and ensures authentic engagement with comprehensive audience verification.",
      advantage: "99.9% authentic reach"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Workflows",
      description: "Streamline your campaigns with automated outreach, contract management, content approval, and payment processing.",
      advantage: "80% time savings"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Continuous campaign optimization using machine learning to maximize engagement, conversions, and return on ad spend.",
      advantage: "12x average ROI"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Advantage - Clear benefits */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Leading Brands Choose
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}InfluenceX
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Leverage cutting-edge technology and data-driven insights to create influencer campaigns that actually convert. 
            Our platform eliminates guesswork and maximizes your marketing ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                    <div className="text-sm text-purple-400 font-semibold">{feature.advantage}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Affinity - Social proof */}
        <div className="mt-20 text-center">
          <p className="text-white/60 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-white">Nike</div>
            <div className="text-2xl font-bold text-white">Coca-Cola</div>
            <div className="text-2xl font-bold text-white">Samsung</div>
            <div className="text-2xl font-bold text-white">Spotify</div>
            <div className="text-2xl font-bold text-white">Airbnb</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
