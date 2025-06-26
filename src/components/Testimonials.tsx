
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CMO at TechFlow",
      company: "TechFlow",
      content: "InfluenceX transformed our marketing strategy. We achieved 15x ROI on our first campaign and discovered influencers we never would have found otherwise. The analytics are incredibly detailed.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Brand Director",
      company: "FitLife Nutrition",
      content: "The AI matching is phenomenal. Every influencer recommendation was perfectly aligned with our brand values. We've seen a 300% increase in authentic engagement since switching to InfluenceX.",
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Marketing Lead",
      company: "EcoBeauty Co.",
      content: "What impressed me most was the fraud protection. We've eliminated fake followers completely and our conversion rates have doubled. The real-time analytics help us optimize campaigns instantly.",
      avatar: "EW"
    },
    {
      name: "David Kim",
      role: "Growth Marketing",
      company: "StreamTech",
      content: "The automated workflows saved us 20 hours per week. Campaign setup that used to take days now happens in minutes. Our team can focus on strategy instead of manual tasks.",
      avatar: "DK"
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Trusted by Marketing Leaders
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}Worldwide
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what top marketing professionals say about their success with InfluenceX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 rounded-xl">
              <CardContent className="p-6 md:p-8">
                <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700">
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-blue-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm md:text-base">SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm md:text-base">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm md:text-base">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm md:text-base">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
