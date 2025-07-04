
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Zap, TrendingUp, Users, Calendar, MessageSquare } from 'lucide-react';

const ContentStrategy = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const strategies = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Attention-Grabbing Strategy Development",
      subtitle: "Create content that stops the scroll",
      description: "We analyze trending topics, audience behavior, and platform algorithms to craft strategies that capture attention in the first 3 seconds.",
      stats: "94% engagement boost",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audience-Targeted Content Planning",
      subtitle: "Speak directly to your ideal customers",
      description: "Our AI identifies your audience's pain points, interests, and preferred content formats to create highly targeted messaging.",
      stats: "3x conversion rate",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Action-Driven Campaign Creation",
      subtitle: "Turn viewers into customers instantly",
      description: "Every piece of content includes strategic CTAs, optimized landing pages, and conversion-focused messaging.",
      stats: "85% action rate",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics-Based Optimization",
      subtitle: "Data drives every decision",
      description: "Real-time performance tracking allows us to pivot strategies instantly, ensuring maximum ROI on every campaign.",
      stats: "12x ROI average",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Authority-Building Content",
      subtitle: "Establish your brand as the industry leader",
      description: "We create thought leadership content that positions your brand as the go-to authority in your niche.",
      stats: "78% trust increase",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Advantage-Focused Scheduling",
      subtitle: "Post when your audience is most active",
      description: "Our AI determines optimal posting times across platforms to maximize reach and engagement for your specific audience.",
      stats: "45% reach boost",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Authentic Storytelling Framework",
      subtitle: "Connect emotionally with your audience",
      description: "We craft compelling brand narratives that resonate deeply, building lasting relationships between your brand and customers.",
      stats: "89% retention rate",
      color: "from-violet-500 to-purple-600"
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-lg font-semibold mb-4">
            CONTENT STRATEGY MASTERY
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Accelerate Your Brand's Growth<br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              With Strategic Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our 7A methodology transforms ordinary content into extraordinary results. 
            From attention-grabbing hooks to action-driven outcomes, we create content strategies that deliver measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {strategies.map((strategy, index) => (
            <Card 
              key={index}
              data-index={index}
              className={`group bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-700 transform ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {strategy.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                      {strategy.title}
                    </h3>
                    <p className="text-purple-200 font-medium mb-3">
                      {strategy.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {strategy.description}
                    </p>
                    <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {strategy.stats}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 max-w-4xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h3>
            <p className="text-purple-100 text-lg mb-6">
              Join 500+ brands already using our 7A methodology to create content that converts
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Strategy Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStrategy;
