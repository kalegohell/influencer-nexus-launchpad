
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Users, Star, MapPin, Link, Phone, Mail, User, Briefcase } from 'lucide-react';

const InfluencerApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    follower_count: '',
    engagement_rate: '',
    niche: '',
    portfolio_url: '',
    bio: '',
    location: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    twitter: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const socialMediaHandles = {
        instagram: formData.instagram,
        tiktok: formData.tiktok,
        youtube: formData.youtube,
        twitter: formData.twitter
      };

      const { error } = await supabase
        .from('influencer_applications')
        .insert({
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone || null,
          follower_count: formData.follower_count ? parseInt(formData.follower_count) : null,
          engagement_rate: formData.engagement_rate ? parseFloat(formData.engagement_rate) : null,
          niche: formData.niche || null,
          portfolio_url: formData.portfolio_url || null,
          bio: formData.bio || null,
          location: formData.location || null,
          social_media_handles: socialMediaHandles
        });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for applying! We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        follower_count: '',
        engagement_rate: '',
        niche: '',
        portfolio_url: '',
        bio: '',
        location: '',
        instagram: '',
        tiktok: '',
        youtube: '',
        twitter: ''
      });

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join as an Influencer</h1>
          <p className="text-lg text-gray-600">
            Apply to become part of our exclusive influencer network and start collaborating with top brands.
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center">
              <Users className="w-6 h-6 mr-2 text-purple-600" />
              Influencer Application
            </CardTitle>
            <CardDescription className="text-center">
              Fill out this form to apply as an influencer. We'll review your application and contact you soon.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Influencer Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-600" />
                  Influencer Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="follower_count">Total Followers</Label>
                    <Input
                      id="follower_count"
                      name="follower_count"
                      type="number"
                      value={formData.follower_count}
                      onChange={handleInputChange}
                      placeholder="50000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="engagement_rate">Engagement Rate (%)</Label>
                    <Input
                      id="engagement_rate"
                      name="engagement_rate"
                      type="number"
                      step="0.01"
                      value={formData.engagement_rate}
                      onChange={handleInputChange}
                      placeholder="3.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="niche">Niche/Category</Label>
                    <Input
                      id="niche"
                      name="niche"
                      value={formData.niche}
                      onChange={handleInputChange}
                      placeholder="Fashion, Tech, Lifestyle..."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="portfolio_url">Portfolio/Website URL</Label>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="portfolio_url"
                      name="portfolio_url"
                      type="url"
                      value={formData.portfolio_url}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Bio/Description</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself, your content style, and what makes you unique..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              {/* Social Media Handles */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                  Social Media Handles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="instagram">Instagram Handle</Label>
                    <Input
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      placeholder="@yourusername"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tiktok">TikTok Handle</Label>
                    <Input
                      id="tiktok"
                      name="tiktok"
                      value={formData.tiktok}
                      onChange={handleInputChange}
                      placeholder="@yourusername"
                    />
                  </div>
                  <div>
                    <Label htmlFor="youtube">YouTube Channel</Label>
                    <Input
                      id="youtube"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleInputChange}
                      placeholder="Channel Name or URL"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitter">Twitter Handle</Label>
                    <Input
                      id="twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      placeholder="@yourusername"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg"
                >
                  {isLoading ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfluencerApplicationForm;
