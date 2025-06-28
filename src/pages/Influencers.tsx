
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Users, 
  Eye, 
  Heart, 
  ArrowLeft,
  Instagram,
  Youtube,
  Star,
  Calendar,
  TrendingUp
} from "lucide-react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";

const Influencers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);

  const campaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      description: "Promote our new summer fashion line across social media platforms",
      status: "Active",
      influencerCount: 8,
      totalReach: 2400000,
      totalEngagement: 156000,
      startDate: "2024-06-01",
      endDate: "2024-07-15"
    },
    {
      id: 2,
      name: "Brand Awareness Drive",
      description: "Increase brand visibility among Gen Z audience",
      status: "Completed",
      influencerCount: 12,
      totalReach: 1800000,
      totalEngagement: 124000,
      startDate: "2024-05-01",
      endDate: "2024-05-31"
    },
    {
      id: 3,
      name: "Fitness Challenge",
      description: "30-day fitness challenge with health influencers",
      status: "Active",
      influencerCount: 6,
      totalReach: 1900000,
      totalEngagement: 98000,
      startDate: "2024-06-15",
      endDate: "2024-07-31"
    },
    {
      id: 4,
      name: "Tech Product Launch",
      description: "Launch campaign for new smartphone accessories",
      status: "Paused",
      influencerCount: 4,
      totalReach: 950000,
      totalEngagement: 42000,
      startDate: "2024-05-15",
      endDate: "2024-06-30"
    }
  ];

  const campaignInfluencers = {
    1: [ // Summer Collection Launch
      {
        id: 1,
        name: "Sarah Johnson",
        username: "@sarahjstyle",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e85022?w=150&h=150&fit=crop&crop=face",
        category: "Fashion",
        followers: 2400000,
        engagement: 4.8,
        platforms: ["Instagram", "YouTube"],
        location: "Los Angeles, CA"
      },
      {
        id: 4,
        name: "Alex Thompson",
        username: "@alexlifestyle",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        category: "Lifestyle",
        followers: 3100000,
        engagement: 5.5,
        platforms: ["Instagram", "YouTube", "TikTok"],
        location: "Miami, FL"
      },
      {
        id: 5,
        name: "Lisa Park",
        username: "@lisabeauty",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
        category: "Beauty",
        followers: 1800000,
        engagement: 4.3,
        platforms: ["Instagram", "YouTube"],
        location: "Chicago, IL"
      }
    ],
    2: [ // Brand Awareness Drive
      {
        id: 2,
        name: "Mike Chen",
        username: "@mikefitness",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        category: "Fitness",
        followers: 1900000,
        engagement: 5.2,
        platforms: ["Instagram", "TikTok"],
        location: "New York, NY"
      },
      {
        id: 5,
        name: "Lisa Park",
        username: "@lisabeauty",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
        category: "Beauty",
        followers: 1800000,
        engagement: 4.3,
        platforms: ["Instagram", "YouTube"],
        location: "Chicago, IL"
      }
    ],
    3: [ // Fitness Challenge
      {
        id: 2,
        name: "Mike Chen",
        username: "@mikefitness",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        category: "Fitness",
        followers: 1900000,
        engagement: 5.2,
        platforms: ["Instagram", "TikTok"],
        location: "New York, NY"
      }
    ],
    4: [ // Tech Product Launch
      {
        id: 3,
        name: "Emma Rodriguez",
        username: "@emmatech",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        category: "Technology",
        followers: 1200000,
        engagement: 3.9,
        platforms: ["YouTube", "Instagram"],
        location: "San Francisco, CA"
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(num);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-4 h-4 text-pink-500" />;
      case 'youtube':
        return <Youtube className="w-4 h-4 text-red-500" />;
      case 'tiktok':
        return <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">T</div>;
      default:
        return null;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentInfluencers = selectedCampaign ? campaignInfluencers[selectedCampaign] || [] : [];
  const selectedCampaignData = campaigns.find(c => c.id === selectedCampaign);

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <DashboardSidebar />
          <SidebarInset className="flex-1">
            <div className="p-8">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-4">
                      {selectedCampaign && (
                        <Button 
                          variant="outline" 
                          onClick={() => setSelectedCampaign(null)}
                          className="bg-white border-gray-200 hover:bg-gray-50"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back to Campaigns
                        </Button>
                      )}
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                          {selectedCampaign ? `${selectedCampaignData?.name} - Influencers` : 'Campaign Influencers'}
                        </h1>
                        <p className="text-gray-600">
                          {selectedCampaign 
                            ? `View all influencers working on this campaign`
                            : 'Select a campaign to view its influencers'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {!selectedCampaign ? (
                  <>
                    {/* Search */}
                    <div className="mb-6">
                      <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search campaigns..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 bg-white border-gray-200"
                        />
                      </div>
                    </div>

                    {/* Campaigns Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCampaigns.map(campaign => (
                        <Card 
                          key={campaign.id} 
                          className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300"
                          onClick={() => setSelectedCampaign(campaign.id)}
                        >
                          <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                                  {campaign.name}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-600 line-clamp-2">
                                  {campaign.description}
                                </CardDescription>
                              </div>
                              <Badge className={`ml-2 ${getStatusColor(campaign.status)} border font-medium`}>
                                {campaign.status}
                              </Badge>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="space-y-4">
                            {/* Campaign Stats */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4 text-blue-500" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{campaign.influencerCount}</p>
                                  <p className="text-xs text-gray-500">Influencers</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <Eye className="w-4 h-4 text-purple-500" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{formatNumber(campaign.totalReach)}</p>
                                  <p className="text-xs text-gray-500">Total Reach</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <Heart className="w-4 h-4 text-pink-500" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{formatNumber(campaign.totalEngagement)}</p>
                                  <p className="text-xs text-gray-500">Engagement</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-orange-500" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900">
                                    {new Date(campaign.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                  </p>
                                  <p className="text-xs text-gray-500">Start Date</p>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-gray-100">
                              <Button variant="outline" size="sm" className="w-full bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300">
                                View Influencers ({campaign.influencerCount})
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Campaign Info Header */}
                    {selectedCampaignData && (
                      <Card className="bg-white border border-gray-200 shadow-sm mb-8">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h2 className="text-xl font-semibold text-gray-900 mb-2">{selectedCampaignData.name}</h2>
                              <p className="text-gray-600">{selectedCampaignData.description}</p>
                            </div>
                            <Badge className={`${getStatusColor(selectedCampaignData.status)} border font-medium`}>
                              {selectedCampaignData.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex items-center space-x-2">
                              <Users className="w-5 h-5 text-blue-500" />
                              <div>
                                <p className="text-lg font-semibold text-gray-900">{selectedCampaignData.influencerCount}</p>
                                <p className="text-sm text-gray-500">Influencers</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Eye className="w-5 h-5 text-purple-500" />
                              <div>
                                <p className="text-lg font-semibold text-gray-900">{formatNumber(selectedCampaignData.totalReach)}</p>
                                <p className="text-sm text-gray-500">Total Reach</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Heart className="w-5 h-5 text-pink-500" />
                              <div>
                                <p className="text-lg font-semibold text-gray-900">{formatNumber(selectedCampaignData.totalEngagement)}</p>
                                <p className="text-sm text-gray-500">Engagement</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-5 h-5 text-orange-500" />
                              <div>
                                <p className="text-lg font-semibold text-gray-900">
                                  {new Date(selectedCampaignData.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(selectedCampaignData.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </p>
                                <p className="text-sm text-gray-500">Campaign Period</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Influencers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {currentInfluencers.map((influencer) => (
                        <Card key={influencer.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
                          <CardContent className="p-6">
                            {/* Profile Header */}
                            <div className="flex items-center space-x-4 mb-4">
                              <Avatar className="w-16 h-16">
                                <AvatarImage src={influencer.avatar} alt={influencer.name} />
                                <AvatarFallback>{influencer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 text-lg">{influencer.name}</h3>
                                <p className="text-gray-500 text-sm">{influencer.username}</p>
                                <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700 border-blue-200 text-xs">
                                  {influencer.category}
                                </Badge>
                              </div>
                            </div>

                            {/* Stats */}
                            <div className="space-y-3 mb-4">
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-2">
                                  <Users className="w-4 h-4 text-blue-500" />
                                  <span className="text-sm font-medium text-gray-700">Followers</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-900">
                                  {formatNumber(influencer.followers)}
                                </span>
                              </div>

                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-2">
                                  <Heart className="w-4 h-4 text-pink-500" />
                                  <span className="text-sm font-medium text-gray-700">Engagement</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-900">
                                  {influencer.engagement}%
                                </span>
                              </div>
                            </div>

                            {/* Platforms */}
                            <div className="mb-4">
                              <p className="text-sm font-medium text-gray-700 mb-2">Platforms</p>
                              <div className="flex space-x-2">
                                {influencer.platforms.map((platform, index) => (
                                  <div key={index} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-lg">
                                    {getPlatformIcon(platform)}
                                    <span className="text-xs font-medium text-gray-700">{platform}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Location */}
                            <div className="text-sm text-gray-500">
                              📍 {influencer.location}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {currentInfluencers.length === 0 && (
                      <div className="text-center py-12">
                        <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Influencers Found</h3>
                        <p className="text-gray-500">This campaign doesn't have any influencers assigned yet.</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Influencers;
