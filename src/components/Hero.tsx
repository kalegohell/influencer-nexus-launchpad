import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowDown, TrendingUp, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  const [brandOnboardingOpen, setBrandOnboardingOpen] = useState(false);
  const [influencerOnboardingOpen, setInfluencerOnboardingOpen] = useState(false);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Attention - Eye-catching headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
            Scale Your Brand with
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}AI-Powered{" "}
            </span>
            Influencer Marketing
          </h1>
          
          {/* Audience - Clear value proposition */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with authentic influencers, track real-time performance, and achieve 10x ROI. 
            Join 5,000+ brands already dominating their markets through data-driven influencer partnerships.
          </p>

          {/* Action - Primary CTAs with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Dialog open={brandOnboardingOpen} onOpenChange={setBrandOnboardingOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40 overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Floating particles effect */}
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-cyan-300 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                  
                  <TrendingUp className="mr-2 w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Start as Brand</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700 max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-white text-xl">Brand Onboarding</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="company" className="text-white">Company Name</Label>
                    <Input id="company" className="bg-slate-800 border-slate-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="industry" className="text-white">Industry</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="food">Food & Beverage</SelectItem>
                        <SelectItem value="fitness">Health & Fitness</SelectItem>
                        <SelectItem value="travel">Travel & Lifestyle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-white">Monthly Budget</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="5k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Work Email</Label>
                    <Input id="email" type="email" className="bg-slate-800 border-slate-600 text-white" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                    Get Free Strategy Call
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={influencerOnboardingOpen} onOpenChange={setInfluencerOnboardingOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group relative bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-white/5 hover:shadow-white/10 overflow-hidden"
                >
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-transparent to-cyan-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full bg-white/5 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Icon animation */}
                  <Users className="mr-2 w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">Join as Influencer</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700 max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-white text-xl">Influencer Registration</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input id="name" className="bg-slate-800 border-slate-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="niche" className="text-white">Content Niche</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Select your niche" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="fitness">Fitness</SelectItem>
                        <SelectItem value="beauty">Beauty</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="followers" className="text-white">Follower Count</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="1k">1K - 10K</SelectItem>
                        <SelectItem value="10k">10K - 100K</SelectItem>
                        <SelectItem value="100k">100K - 1M</SelectItem>
                        <SelectItem value="1m">1M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="instagram" className="text-white">Instagram Handle</Label>
                    <Input id="instagram" placeholder="@yourusername" className="bg-slate-800 border-slate-600 text-white" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                    Apply to Network
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Authority - Trust indicators with staggered animation */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { value: "5,000+", label: "Active Brands" },
              { value: "50,000+", label: "Verified Influencers" },
              { value: "$100M+", label: "Campaign Revenue" },
              { value: "12x", label: "Average ROI" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll indicator with enhanced animation */}
          <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <ArrowDown className="w-6 h-6 text-white/40 animate-bounce" />
              {/* Pulsing ring around arrow */}
              <div className="absolute inset-0 w-6 h-6 border border-white/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
