
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
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Assurance - Customer testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Marketing Leaders
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Worldwide
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what top marketing professionals say about their success with InfluenceX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500">
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-white/60">{testimonial.role}</div>
                    <div className="text-purple-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
