import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowDown, TrendingUp, Users } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [brandOnboardingOpen, setBrandOnboardingOpen] = useState(false);
  const [influencerOnboardingOpen, setInfluencerOnboardingOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Trigger animations when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Brand signup form state
  const [brandForm, setBrandForm] = useState({
    company: '',
    industry: '',
    budget: '',
    email: '',
    password: '',
    fullName: ''
  });

  // Enhanced influencer signup form state
  const [influencerForm, setInfluencerForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    niche: '',
    followers: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    twitter: '',
    linkedin: '',
    website: '',
    barterAvailable: false,
    contentTypes: [] as string[],
    location: ''
  });

  const handleBrandSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: brandForm.email,
        password: brandForm.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            full_name: brandForm.fullName || brandForm.company,
            user_type: 'brand',
            company: brandForm.company,
            industry: brandForm.industry,
            budget: brandForm.budget
          }
        }
      });

      if (error) throw error;

      toast({
        title: "Account Created Successfully!",
        description: "Please check your email to verify your account before signing in.",
      });

      setBrandOnboardingOpen(false);
      setBrandForm({ company: '', industry: '', budget: '', email: '', password: '', fullName: '' });
      
      // Redirect to auth page for login
      setTimeout(() => {
        navigate('/auth');
      }, 2000);

    } catch (error: any) {
      toast({
        title: "Signup Failed",
        description: error.message || "Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInfluencerSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const socialMediaHandles = {
        instagram: influencerForm.instagram,
        tiktok: influencerForm.tiktok,
        youtube: influencerForm.youtube,
        twitter: influencerForm.twitter,
        linkedin: influencerForm.linkedin,
        website: influencerForm.website
      };

      const { error } = await supabase.auth.signUp({
        email: influencerForm.email,
        password: influencerForm.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            full_name: influencerForm.name,
            user_type: 'influencer',
            phone: influencerForm.phone,
            niche: influencerForm.niche,
            followers: influencerForm.followers,
            social_media_handles: socialMediaHandles,
            barter_available: influencerForm.barterAvailable,
            content_types: influencerForm.contentTypes,
            location: influencerForm.location
          }
        }
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Please check your email to verify your account. We'll review your application and get back to you soon.",
      });

      setInfluencerOnboardingOpen(false);
      setInfluencerForm({ 
        name: '', 
        email: '', 
        password: '', 
        phone: '', 
        niche: '', 
        followers: '', 
        instagram: '', 
        tiktok: '', 
        youtube: '', 
        twitter: '', 
        linkedin: '', 
        website: '', 
        barterAvailable: false, 
        contentTypes: [], 
        location: '' 
      });
      
      setTimeout(() => {
        navigate('/auth');
      }, 2000);

    } catch (error: any) {
      toast({
        title: "Signup Failed",
        description: error.message || "Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleContentTypeChange = (contentType: string, checked: boolean) => {
    setInfluencerForm(prev => ({
      ...prev,
      contentTypes: checked 
        ? [...prev.contentTypes, contentType]
        : prev.contentTypes.filter(type => type !== contentType)
    }));
  };

  // Animated counters
  const activeBrands = useCountUp(5000, 2000, '+');
  const verifiedInfluencers = useCountUp(50000, 2500, '+');
  const campaignRevenue = useCountUp(100, 2200, 'M+');
  const averageROI = useCountUp(12, 1800, 'x');

  return (
    <section className="pt-20 md:pt-28 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Animated Headline */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Scale Your Brand with
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}AI-Powered{" "}
            </span>
            Influencer Marketing
          </h1>
          
          {/* Animated Subheadline */}
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Connect with authentic influencers, track real-time performance, and achieve 10x ROI. 
            Join 5,000+ brands already dominating their markets.
          </p>

          {/* Animated CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <Dialog open={brandOnboardingOpen} onOpenChange={setBrandOnboardingOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  <TrendingUp className="mr-2 w-5 h-5" />
                  Start as Brand
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white border border-gray-200 shadow-2xl max-w-md mx-4 rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-gray-900 text-xl md:text-2xl font-bold">
                    Create Brand Account
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleBrandSignup} className="space-y-4 p-2">
                  <div className="space-y-2">
                    <Label htmlFor="brand-name" className="text-gray-700 font-medium">Full Name</Label>
                    <Input 
                      id="brand-name" 
                      value={brandForm.fullName}
                      onChange={(e) => setBrandForm({...brandForm, fullName: e.target.value})}
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                    <Input 
                      id="company" 
                      value={brandForm.company}
                      onChange={(e) => setBrandForm({...brandForm, company: e.target.value})}
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-gray-700 font-medium">Industry</Label>
                    <Select value={brandForm.industry} onValueChange={(value) => setBrandForm({...brandForm, industry: value})}>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
                        <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="food">Food & Beverage</SelectItem>
                        <SelectItem value="fitness">Health & Fitness</SelectItem>
                        <SelectItem value="travel">Travel & Lifestyle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-gray-700 font-medium">Monthly Budget</Label>
                    <Select value={brandForm.budget} onValueChange={(value) => setBrandForm({...brandForm, budget: value})}>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
                        <SelectItem value="5k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-email" className="text-gray-700 font-medium">Work Email</Label>
                    <Input 
                      id="brand-email" 
                      type="email" 
                      value={brandForm.email}
                      onChange={(e) => setBrandForm({...brandForm, email: e.target.value})}
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                      placeholder="your@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-password" className="text-gray-700 font-medium">Password</Label>
                    <Input 
                      id="brand-password" 
                      type="password" 
                      value={brandForm.password}
                      onChange={(e) => setBrandForm({...brandForm, password: e.target.value})}
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                      placeholder="Create a password"
                      required
                      minLength={6}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 rounded-lg font-semibold transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Brand Account"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={influencerOnboardingOpen} onOpenChange={setInfluencerOnboardingOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105 transform"
                >
                  <Users className="mr-2 w-5 h-5" />
                  Join as Influencer
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white border border-gray-200 shadow-2xl max-w-2xl mx-4 rounded-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-gray-900 text-xl md:text-2xl font-bold">
                    Apply as Influencer
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleInfluencerSignup} className="space-y-6 p-2">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                        <Input 
                          id="name" 
                          value={influencerForm.name}
                          onChange={(e) => setInfluencerForm({...influencerForm, name: e.target.value})}
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="influencer-email" className="text-gray-700 font-medium">Email *</Label>
                        <Input 
                          id="influencer-email" 
                          type="email" 
                          value={influencerForm.email}
                          onChange={(e) => setInfluencerForm({...influencerForm, email: e.target.value})}
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Contact Number</Label>
                        <Input 
                          id="phone" 
                          value={influencerForm.phone}
                          onChange={(e) => setInfluencerForm({...influencerForm, phone: e.target.value})}
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-gray-700 font-medium">Location</Label>
                        <Input 
                          id="location" 
                          value={influencerForm.location}
                          onChange={(e) => setInfluencerForm({...influencerForm, location: e.target.value})}
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                          placeholder="City, Country"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="influencer-password" className="text-gray-700 font-medium">Password *</Label>
                      <Input 
                        id="influencer-password" 
                        type="password" 
                        value={influencerForm.password}
                        onChange={(e) => setInfluencerForm({...influencerForm, password: e.target.value})}
                        className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                        placeholder="Create a password"
                        required
                        minLength={6}
                      />
                    </div>
                  </div>

                  {/* Content & Audience Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Content & Audience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="niche" className="text-gray-700 font-medium">Content Niche *</Label>
                        <Select value={influencerForm.niche} onValueChange={(value) => setInfluencerForm({...influencerForm, niche: value})}>
                          <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11">
                            <SelectValue placeholder="Select your niche" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            <SelectItem value="fitness">Fitness & Health</SelectItem>
                            <SelectItem value="beauty">Beauty & Fashion</SelectItem>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                            <SelectItem value="food">Food & Cooking</SelectItem>
                            <SelectItem value="gaming">Gaming</SelectItem>
                            <SelectItem value="business">Business & Finance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="followers" className="text-gray-700 font-medium">Total Follower Count *</Label>
                        <Select value={influencerForm.followers} onValueChange={(value) => setInfluencerForm({...influencerForm, followers: value})}>
                          <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
                            <SelectItem value="1k">1K - 10K</SelectItem>
                            <SelectItem value="10k">10K - 50K</SelectItem>
                            <SelectItem value="50k">50K - 100K</SelectItem>
                            <SelectItem value="100k">100K - 500K</SelectItem>
                            <SelectItem value="500k">500K - 1M</SelectItem>
                            <SelectItem value="1m">1M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Content Types */}
                    <div className="space-y-3">
                      <Label className="text-gray-700 font-medium">Content Types You Create</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Photos', 'Videos', 'Stories', 'Reels', 'Live Streaming', 'Blog Posts'].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={type}
                              checked={influencerForm.contentTypes.includes(type)}
                              onCheckedChange={(checked) => handleContentTypeChange(type, checked as boolean)}
                            />
                            <Label htmlFor={type} className="text-sm text-gray-600">{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Social Media Profiles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="instagram" className="text-gray-700 font-medium">Instagram Handle *</Label>
                        <Input 
                          id="instagram" 
                          value={influencerForm.instagram}
                          onChange={(e) => setInfluencerForm({...influencerForm, instagram: e.target.value})}
                          placeholder="@yourusername" 
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tiktok" className="text-gray-700 font-medium">TikTok Handle</Label>
                        <Input 
                          id="tiktok" 
                          value={influencerForm.tiktok}
                          onChange={(e) => setInfluencerForm({...influencerForm, tiktok: e.target.value})}
                          placeholder="@yourusername" 
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="youtube" className="text-gray-700 font-medium">YouTube Channel</Label>
                        <Input 
                          id="youtube" 
                          value={influencerForm.youtube}
                          onChange={(e) => setInfluencerForm({...influencerForm, youtube: e.target.value})}
                          placeholder="Channel Name or URL" 
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twitter" className="text-gray-700 font-medium">Twitter/X Handle</Label>
                        <Input 
                          id="twitter" 
                          value={influencerForm.twitter}
                          onChange={(e) => setInfluencerForm({...influencerForm, twitter: e.target.value})}
                          placeholder="@yourusername" 
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="text-gray-700 font-medium">LinkedIn Profile</Label>
                        <Input 
                          id="linkedin" 
                          value={influencerForm.linkedin}
                          onChange={(e) => setInfluencerForm({...influencerForm, linkedin: e.target.value})}
                          placeholder="LinkedIn URL or username" 
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-gray-700 font-medium">Website/Portfolio</Label>
                        <Input 
                          id="website" 
                          value={influencerForm.website}
                          onChange={(e) => setInfluencerForm({...influencerForm, website: e.target.value})}
                          placeholder="https://yourwebsite.com" 
                          className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg h-11" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Collaboration Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Collaboration Preferences</h3>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="barterAvailable"
                        checked={influencerForm.barterAvailable}
                        onCheckedChange={(checked) => setInfluencerForm({...influencerForm, barterAvailable: checked as boolean})}
                      />
                      <Label htmlFor="barterAvailable" className="text-gray-700 font-medium">
                        I'm open to barter collaborations (product exchange)
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg font-semibold transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting Application..." : "Apply to Network"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Animated trust indicators */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-xl md:text-2xl font-bold text-gray-900">{activeBrands}</div>
              <div className="text-sm md:text-base">Active Brands</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-xl md:text-2xl font-bold text-gray-900">{verifiedInfluencers}</div>
              <div className="text-sm md:text-base">Verified Influencers</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-xl md:text-2xl font-bold text-gray-900">${campaignRevenue}</div>
              <div className="text-sm md:text-base">Campaign Revenue</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-xl md:text-2xl font-bold text-gray-900">{averageROI}</div>
              <div className="text-sm md:text-base">Average ROI</div>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className={`flex justify-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <ArrowDown className="w-5 h-5 text-gray-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
