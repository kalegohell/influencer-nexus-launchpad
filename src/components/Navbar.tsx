import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/20 rounded-3xl' 
        : 'bg-black/20 backdrop-blur-lg border border-white/10 shadow-xl shadow-blue-500/10 rounded-3xl'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-18">
          {/* Logo with enhanced interactivity */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <TrendingUp className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              {/* Multiple animated rings */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/20 animate-pulse group-hover:border-blue-300/40 transition-all duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/10 group-hover:border-cyan-300/30 transition-all duration-700 group-hover:scale-125 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-cyan-100 transition-all duration-500">
                InfluenceX
              </span>
              <div className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>

          {/* Desktop Navigation with enhanced interactivity */}
          <div className="hidden lg:flex items-center space-x-2">
            {[
              { href: '#features', label: 'Features' },
              { href: '#analytics', label: 'Analytics' },
              { href: '#testimonials', label: 'Success Stories' },
              { href: '#pricing', label: 'Pricing' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-6 py-3 text-white/80 hover:text-white transition-all duration-500 group rounded-2xl hover:bg-white/5 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 font-medium">{item.label}</span>
                {/* Interactive background with morphing effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100"></div>
                {/* Floating particles effect */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-ping"></div>
                {/* Bottom glow animation */}
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-500 rounded-full transform -translate-x-1/2 group-hover:shadow-lg group-hover:shadow-blue-400/50"></div>
              </a>
            ))}
          </div>

          {/* Right side - Enhanced Login and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Login Button */}
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="relative bg-white/10 border border-blue-400/40 text-white hover:bg-blue-500/20 hover:border-blue-300/60 transition-all duration-500 backdrop-blur-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-400/30 group overflow-hidden rounded-2xl px-6 py-3 transform hover:scale-105"
                >
                  {/* Enhanced animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-blue-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                  <span className="relative z-10 font-medium">Brand Login</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900/95 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-500/20 rounded-3xl">
                <DialogHeader>
                  <DialogTitle className="text-white text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Brand Portal Login
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-100">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      className="bg-slate-800/50 border-blue-500/30 text-white focus:border-blue-400/50 focus:ring-blue-400/25 backdrop-blur-sm" 
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-blue-100">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      className="bg-slate-800/50 border-blue-500/30 text-white focus:border-blue-400/50 focus:ring-blue-400/25 backdrop-blur-sm" 
                      placeholder="Enter your password"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40 transition-all duration-300">
                    Access Dashboard
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-blue-500/20 transition-all duration-500 rounded-2xl w-12 h-12 transform hover:scale-110 hover:rotate-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative">
                {isMobileMenuOpen ? 
                  <X className="w-6 h-6 transform rotate-0 transition-transform duration-300" /> : 
                  <Menu className="w-6 h-6 transform rotate-0 transition-transform duration-300" />
                }
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 ${
          isMobileMenuOpen ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 space-y-3 border-t border-blue-500/20 mt-4">
            {[
              { href: '#features', label: 'Features' },
              { href: '#analytics', label: 'Analytics' },
              { href: '#testimonials', label: 'Success Stories' },
              { href: '#pricing', label: 'Pricing' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-6 py-4 text-white/80 hover:text-white hover:bg-blue-500/15 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-x-2 border border-transparent hover:border-blue-400/20"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced futuristic scan line effect */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-full"></div>
      {/* Additional glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-3xl blur-xl -z-10"></div>
    </nav>
  );
};

export default Navbar;
