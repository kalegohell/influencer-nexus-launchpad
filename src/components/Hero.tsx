import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowRight, Star, TrendingUp, Users, Zap, X } from 'lucide-react';

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    contact_number: '',
    location: '',
    bio: '',
    niche: '',
    follower_range: '',
    engagement_rate: '',
    instagram_handle: '',
    youtube_handle: '',
    tiktok_handle: '',
    twitter_handle: '',
    linkedin_handle: '',
    portfolio_url: '',
    min_rate: '',
    max_rate: '',
    barter_available: false
  });
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([]);
  const [selectedCollaborationTypes, setSelectedCollaborationTypes] = useState<string[]>([]);
  const { toast } = useToast();

  const contentTypeOptions = [
    'Instagram Posts', 'Instagram Stories', 'Instagram Reels', 'YouTube Videos', 
    'YouTube Shorts', 'TikTok Videos', 'Blog Posts', 'Product Reviews', 
    'Unboxing Videos', 'Tutorials', 'Live Streams'
  ];

  const collaborationTypeOptions = [
    'Sponsored Posts', 'Product Gifting', 'Brand Ambassadorship', 
    'Event Participation', 'Content Creation', 'Long-term Partnership'
  ];

  const followerRangeOptions = [
    '1K - 10K', '10K - 50K', '50K - 100K', '100K - 500K', '500K - 1M', '1M+'
  ];

  const nicheOptions = [
    'Fashion & Style', 'Beauty & Skincare', 'Fitness & Health', 'Food & Cooking',
    'Travel & Adventure', 'Technology', 'Gaming', 'Lifestyle', 'Parenting',
    'Business & Finance', 'Education', 'Entertainment', 'Sports', 'Art & Design'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContentTypeToggle = (contentType: string) => {
    setSelectedContentTypes(prev => 
      prev.includes(contentType) 
        ? prev.filter(type => type !== contentType)
        : [...prev, contentType]
    );
  };

  const handleCollaborationTypeToggle = (collaborationType: string) => {
    setSelectedCollaborationTypes(prev => 
      prev.includes(collaborationType) 
        ? prev.filter(type => type !== collaborationType)
        : [...prev, collaborationType]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const applicationData = {
        full_name: formData.full_name,
        email: formData.email,
        contact_number: formData.contact_number || null,
        location: formData.location || null,
        bio: formData.bio || null,
        niche: formData.niche || null,
        follower_range: formData.follower_range || null,
        engagement_rate: formData.engagement_rate ? parseFloat(formData.engagement_rate) : null,
        instagram_handle: formData.instagram_handle || null,
        youtube_handle: formData.youtube_handle || null,
        tiktok_handle: formData.tiktok_handle || null,
        twitter_handle: formData.twitter_handle || null,
        linkedin_handle: formData.linkedin_handle || null,
        portfolio_url: formData.portfolio_url || null,
        min_rate: formData.min_rate ? parseFloat(formData.min_rate) : null,
        max_rate: formData.max_rate ? parseFloat(formData.max_rate) : null,
        barter_available: formData.barter_available,
        content_types: selectedContentTypes.length > 0 ? selectedContentTypes : null,
        collaboration_types: selectedCollaborationTypes.length > 0 ? selectedCollaborationTypes : null,
        status: 'pending'
      };

      const { error } = await supabase
        .from('influencer_applications')
        .insert(applicationData);

      if (error) throw error;

      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for applying! We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        full_name: '',
        email: '',
        contact_number: '',
        location: '',
        bio: '',
        niche: '',
        follower_range: '',
        engagement_rate: '',
        instagram_handle: '',
        youtube_handle: '',
        tiktok_handle: '',
        twitter_handle: '',
        linkedin_handle: '',
        portfolio_url: '',
        min_rate: '',
        max_rate: '',
        barter_available: false
      });
      setSelectedContentTypes([]);
      setSelectedCollaborationTypes([]);
      setIsDialogOpen(false);

    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/img/grid-pattern.svg')] bg-repeat" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl pointer-events-none w-[800px] h-[600px] bg-gradient-to-br from-blue-700 via-blue-500 to-purple-700 rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex rounded-full bg-blue-100 p-1 sm:p-2">
              <Badge className="bg-blue-500 text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium">
                Launching Soon
              </Badge>
              <Badge className="text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer">
                Explore Beta <Zap className="ml-2 h-4 w-4 inline-block" />
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Connect Brands with</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Top Influencers
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The ultimate platform where authentic influence meets strategic brand partnerships. 
                <span className="block mt-2 text-lg text-gray-500">
                  Join thousands of creators building meaningful collaborations.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Join as Influencer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Join as an Influencer</DialogTitle>
                    <DialogDescription className="text-center text-lg">
                      Fill out this form to apply as an influencer and start collaborating with top brands.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="full_name">Full Name *</Label>
                          <Input
                            id="full_name"
                            value={formData.full_name}
                            onChange={(e) => handleInputChange('full_name', e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contact_number">Contact Number</Label>
                          <Input
                            id="contact_number"
                            value={formData.contact_number}
                            onChange={(e) => handleInputChange('contact_number', e.target.value)}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            placeholder="City, Country"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="bio">Bio/Description</Label>
                        <Textarea
                          id="bio"
                          value={formData.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          placeholder="Tell us about yourself and your content..."
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>

                    {/* Influencer Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Influencer Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="niche">Niche/Category</Label>
                          <Select value={formData.niche} onValueChange={(value) => handleInputChange('niche', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your niche" />
                            </SelectTrigger>
                            <SelectContent>
                              {nicheOptions.map(niche => (
                                <SelectItem key={niche} value={niche}>{niche}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="follower_range">Follower Range</Label>
                          <Select value={formData.follower_range} onValueChange={(value) => handleInputChange('follower_range', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              {followerRangeOptions.map(range => (
                                <SelectItem key={range} value={range}>{range}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="engagement_rate">Engagement Rate (%)</Label>
                          <Input
                            id="engagement_rate"
                            type="number"
                            step="0.01"
                            value={formData.engagement_rate}
                            onChange={(e) => handleInputChange('engagement_rate', e.target.value)}
                            placeholder="3.5"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="portfolio_url">Portfolio/Website URL</Label>
                        <Input
                          id="portfolio_url"
                          type="url"
                          value={formData.portfolio_url}
                          onChange={(e) => handleInputChange('portfolio_url', e.target.value)}
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>

                    {/* Social Media Handles */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Social Media Handles</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="instagram_handle">Instagram Handle</Label>
                          <Input
                            id="instagram_handle"
                            value={formData.instagram_handle}
                            onChange={(e) => handleInputChange('instagram_handle', e.target.value)}
                            placeholder="@yourusername"
                          />
                        </div>
                        <div>
                          <Label htmlFor="youtube_handle">YouTube Channel</Label>
                          <Input
                            id="youtube_handle"
                            value={formData.youtube_handle}
                            onChange={(e) => handleInputChange('youtube_handle', e.target.value)}
                            placeholder="Channel Name or URL"
                          />
                        </div>
                        <div>
                          <Label htmlFor="tiktok_handle">TikTok Handle</Label>
                          <Input
                            id="tiktok_handle"
                            value={formData.tiktok_handle}
                            onChange={(e) => handleInputChange('tiktok_handle', e.target.value)}
                            placeholder="@yourusername"
                          />
                        </div>
                        <div>
                          <Label htmlFor="twitter_handle">Twitter Handle</Label>
                          <Input
                            id="twitter_handle"
                            value={formData.twitter_handle}
                            onChange={(e) => handleInputChange('twitter_handle', e.target.value)}
                            placeholder="@yourusername"
                          />
                        </div>
                        <div>
                          <Label htmlFor="linkedin_handle">LinkedIn Handle</Label>
                          <Input
                            id="linkedin_handle"
                            value={formData.linkedin_handle}
                            onChange={(e) => handleInputChange('linkedin_handle', e.target.value)}
                            placeholder="linkedin.com/in/yourusername"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Types */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Content Types</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {contentTypeOptions.map(contentType => (
                          <div key={contentType} className="flex items-center space-x-2">
                            <Checkbox
                              id={contentType}
                              checked={selectedContentTypes.includes(contentType)}
                              onCheckedChange={() => handleContentTypeToggle(contentType)}
                            />
                            <Label htmlFor={contentType} className="text-sm">{contentType}</Label>
                          </div>
                        ))}
                      </div>
                      {selectedContentTypes.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {selectedContentTypes.map(type => (
                            <Badge key={type} variant="secondary" className="text-xs">
                              {type}
                              <X 
                                className="ml-1 h-3 w-3 cursor-pointer" 
                                onClick={() => handleContentTypeToggle(type)}
                              />
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Collaboration Types */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Collaboration Preferences</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {collaborationTypeOptions.map(collaborationType => (
                          <div key={collaborationType} className="flex items-center space-x-2">
                            <Checkbox
                              id={collaborationType}
                              checked={selectedCollaborationTypes.includes(collaborationType)}
                              onCheckedChange={() => handleCollaborationTypeToggle(collaborationType)}
                            />
                            <Label htmlFor={collaborationType} className="text-sm">{collaborationType}</Label>
                          </div>
                        ))}
                      </div>
                      {selectedCollaborationTypes.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {selectedCollaborationTypes.map(type => (
                            <Badge key={type} variant="secondary" className="text-xs">
                              {type}
                              <X 
                                className="ml-1 h-3 w-3 cursor-pointer" 
                                onClick={() => handleCollaborationTypeToggle(type)}
                              />
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Pricing Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Pricing Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="min_rate">Minimum Rate (USD)</Label>
                          <Input
                            id="min_rate"
                            type="number"
                            step="0.01"
                            value={formData.min_rate}
                            onChange={(e) => handleInputChange('min_rate', e.target.value)}
                            placeholder="100"
                          />
                        </div>
                        <div>
                          <Label htmlFor="max_rate">Maximum Rate (USD)</Label>
                          <Input
                            id="max_rate"
                            type="number"
                            step="0.01"
                            value={formData.max_rate}
                            onChange={(e) => handleInputChange('max_rate', e.target.value)}
                            placeholder="1000"
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="barter_available"
                          checked={formData.barter_available}
                          onCheckedChange={(checked) => handleInputChange('barter_available', checked as boolean)}
                        />
                        <Label htmlFor="barter_available">Available for barter/product exchange collaborations</Label>
                      </div>
                    </div>

                    <div className="flex justify-center pt-6">
                      <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg"
                      >
                        {isLoading ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>

              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">10K+</p>
                  <p className="text-gray-600">Active Influencers</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600">Partner Brands</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">95%</p>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
