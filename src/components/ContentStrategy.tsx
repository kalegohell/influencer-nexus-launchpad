
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Target, Zap, TrendingUp, Users, Calendar, MessageSquare } from 'lucide-react';

const ContentStrategy = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const strategies = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Attention-Grabbing Strategy Development",
      subtitle: "Create content that stops the scroll",
      description: "We analyze trending topics, audience behavior, and platform algorithms to craft strategies that capture attention in the first 3 seconds.",
      stats: "94% engagement boost",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience-Targeted Content Planning",
      subtitle: "Speak directly to your ideal customers",
      description: "Our AI identifies your audience's pain points, interests, and preferred content formats to create highly targeted messaging.",
      stats: "3x conversion rate",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Action-Driven Campaign Creation",
      subtitle: "Turn viewers into customers instantly",
      description: "Every piece of content includes strategic CTAs, optimized landing pages, and conversion-focused messaging.",
      stats: "85% action rate",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Analytics-Based Optimization",
      subtitle: "Data drives every decision",
      description: "Real-time performance tracking allows us to pivot strategies instantly, ensuring maximum ROI on every campaign.",
      stats: "12x ROI average",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Authority-Building Content",
      subtitle: "Establish your brand as the industry leader",
      description: "We create thought leadership content that positions your brand as the go-to authority in your niche.",
      stats: "78% trust increase",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Advantage-Focused Scheduling",
      subtitle: "Post when your audience is most active",
      description: "Our AI determines optimal posting times across platforms to maximize reach and engagement for your specific audience.",
      stats: "45% reach boost",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Authentic Storytelling Framework",
      subtitle: "Connect emotionally with your audience",
      description: "We craft compelling brand narratives that resonate deeply, building lasting relationships between your brand and customers.",
      stats: "89% retention rate",
      color: "from-rose-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-bold mb-4 uppercase tracking-wider">
            CONTENT STRATEGY MASTERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Accelerate Your Brand's Growth<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              With Strategic Content
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our 7A methodology transforms ordinary content into extraordinary results. 
            From attention-grabbing hooks to action-driven outcomes, we create content strategies that deliver measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {strategies.map((strategy, index) => (
            <Card 
              key={index}
              data-index={index}
              className={`group bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-700 transform ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {strategy.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {strategy.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 text-sm">
                      {strategy.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {strategy.description}
                    </p>
                    <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {strategy.stats}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-8 max-w-4xl shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Content Strategy?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Join 500+ brands already using our 7A methodology to create content that converts
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-base font-semibold">
              Start Your Strategy Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStrategy;
