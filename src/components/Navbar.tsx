
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
    <nav className={`fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl' 
        : 'bg-white/90 backdrop-blur-lg border border-gray-100 shadow-lg rounded-2xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                InfluenceX
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { href: '#features', label: 'Features' },
              { href: '#analytics', label: 'Analytics' },
              { href: '#testimonials', label: 'Success Stories' },
              { href: '#pricing', label: 'Pricing' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 rounded-lg hover:bg-blue-50 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Login Button */}
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 rounded-lg px-3 py-2 md:px-4 text-sm font-medium"
                >
                  Brand Login
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white border border-gray-200 shadow-xl rounded-2xl max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-gray-900 text-xl font-semibold">
                    Brand Portal Login
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg" 
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg" 
                      placeholder="Enter your password"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium py-2.5 transition-colors duration-200">
                    Access Dashboard
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700 hover:bg-gray-100 rounded-lg w-10 h-10 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
            {[
              { href: '#features', label: 'Features' },
              { href: '#analytics', label: 'Analytics' },
              { href: '#testimonials', label: 'Success Stories' },
              { href: '#pricing', label: 'Pricing' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
