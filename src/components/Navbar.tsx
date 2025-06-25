
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/30 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10' 
        : 'bg-black/10 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with futuristic glow */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-400/40 transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-400/30 animate-pulse group-hover:border-blue-300/50 transition-colors duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                InfluenceX
              </span>
              <div className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { href: '#features', label: 'Features' },
              { href: '#analytics', label: 'Analytics' },
              { href: '#testimonials', label: 'Success Stories' },
              { href: '#pricing', label: 'Pricing' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Hover effect background */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bottom line animation */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Right side - Login and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="relative bg-white/5 border border-blue-400/30 text-white hover:bg-blue-500/20 hover:border-blue-300/50 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-blue-500/10 hover:shadow-blue-400/20 group overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Brand Login</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900/95 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-500/20">
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

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-blue-500/20 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-blue-500/20">
            {[
              { href: '#features', label: 'Features' },
              { href: '#analytics', label: 'Analytics' },
              { href: '#testimonials', label: 'Success Stories' },
              { href: '#pricing', label: 'Pricing' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-blue-500/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Futuristic scan line effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
