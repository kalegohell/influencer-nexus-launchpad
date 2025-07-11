import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building2, 
  Search, 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp,
  ArrowLeft,
  Eye,
  Play,
  Pause,
  CheckCircle,
  Clock,
  Link,
  ExternalLink,
  Check,
  X
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

// Mock data for brands
const mockBrands = [
  {
    id: 1,
    name: "Nike Sports",
    email: "admin@nike.com",
    logo: "https://via.placeholder.com/80x80/FF6B35/FFFFFF?text=N",
    status: "Active",
    campaigns: 12,
    activeCampaigns: 5,
    totalSpend: "$45,000",
    joinDate: "2024-01-15",
    industry: "Sports & Fitness",
    description: "Leading global sports and fitness brand"
  },
  {
    id: 2,
    name: "Coca Cola",
    email: "marketing@cocacola.com",
    logo: "https://via.placeholder.com/80x80/E60026/FFFFFF?text=CC",
    status: "Active",
    campaigns: 8,
    activeCampaigns: 3,
    totalSpend: "$32,000",
    joinDate: "2024-02-20",
    industry: "Food & Beverage",
    description: "World's largest beverage company"
  },
  {
    id: 3,
    name: "Apple Inc",
    email: "campaigns@apple.com",
    logo: "https://via.placeholder.com/80x80/007AFF/FFFFFF?text=A",
    status: "Active",
    campaigns: 15,
    activeCampaigns: 7,
    totalSpend: "$89,000",
    joinDate: "2024-03-10",
    industry: "Technology",
    description: "Innovative technology and consumer electronics"
  },
  {
    id: 4,
    name: "Tesla Motors",
    email: "marketing@tesla.com",
    logo: "https://via.placeholder.com/80x80/CC0000/FFFFFF?text=T",
    status: "Active",
    campaigns: 6,
    activeCampaigns: 2,
    totalSpend: "$28,500",
    joinDate: "2024-04-05",
    industry: "Automotive",
    description: "Electric vehicles and clean energy"
  }
];

// Mock data for campaigns with pending approvals
const mockCampaigns = [
  {
    id: 1,
    brandId: 1,
    name: "Summer Sports Collection 2024",
    status: "Active",
    budget: "$12,000",
    spent: "$8,500",
    influencers: 15,
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    engagement: "4.2%",
    reach: "2.5M",
    description: "Promoting the new summer sports collection through fitness influencers",
    posts: [
      {
        id: 1,
        url: "https://instagram.com/p/sample1",
        metrics: { likes: 12500, comments: 350, shares: 85 },
        status: "approved"
      }
    ]
  },
  {
    id: 2,
    brandId: 1,
    name: "Nike Air Max Launch",
    status: "Completed",
    budget: "$25,000",
    spent: "$24,800",
    influencers: 25,
    startDate: "2024-03-15",
    endDate: "2024-05-15",
    engagement: "5.8%",
    reach: "4.1M",
    description: "Launch campaign for the new Air Max sneaker line",
    posts: []
  },
  {
    id: 5,
    brandId: 1,
    name: "Fitness Influencer Partnership",
    status: "Pending Approval",
    budget: "$15,000",
    spent: "$0",
    influencers: 8,
    startDate: "2024-07-01",
    endDate: "2024-09-30",
    engagement: "0%",
    reach: "0",
    description: "Partnership with top fitness influencers for summer campaign",
    posts: []
  },
  {
    id: 3,
    brandId: 2,
    name: "Refresh Your Summer",
    status: "Active",
    budget: "$18,000",
    spent: "$12,300",
    influencers: 20,
    startDate: "2024-05-01",
    endDate: "2024-09-30",
    engagement: "3.9%",
    reach: "3.2M",
    description: "Summer beverage campaign targeting lifestyle influencers",
    posts: []
  },
  {
    id: 4,
    brandId: 3,
    name: "iPhone 15 Pro Campaign",
    status: "Paused",
    budget: "$50,000",
    spent: "$35,000",
    influencers: 40,
    startDate: "2024-04-01",
    endDate: "2024-07-31",
    engagement: "6.1%",
    reach: "8.5M",
    description: "Showcase the new iPhone 15 Pro features through tech influencers",
    posts: []
  }
];

export function BrandManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);
  const [view, setView] = useState<'brands' | 'campaigns' | 'campaign-detail'>('brands');
  const [isTrackingDialogOpen, setIsTrackingDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      postUrl: "",
      notes: ""
    }
  });

  const filteredBrands = mockBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedBrandData = selectedBrand ? mockBrands.find(b => b.id === selectedBrand) : null;
  const brandCampaigns = selectedBrand ? mockCampaigns.filter(c => c.brandId === selectedBrand) : [];
  const selectedCampaignData = selectedCampaign ? mockCampaigns.find(c => c.id === selectedCampaign) : null;

  const getStatusBadge = (status: string) => {
    const variants = {
      "Active": "bg-green-100 text-green-800",
      "Completed": "bg-blue-100 text-blue-800", 
      "Paused": "bg-yellow-100 text-yellow-800",
      "Pending Approval": "bg-orange-100 text-orange-800",
      "Pending": "bg-gray-100 text-gray-800"
    };
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <Play className="w-4 h-4" />;
      case "Completed":
        return <CheckCircle className="w-4 h-4" />;
      case "Paused":
        return <Pause className="w-4 h-4" />;
      case "Pending Approval":
        return <Clock className="w-4 h-4" />;
      default:
        return <Eye className="w-4 h-4" />;
    }
  };

  const handleApproveCampaign = (campaignId: number) => {
    toast({
      title: "Campaign Approved",
      description: "The campaign has been approved and is now active.",
    });
  };

  const handleRejectCampaign = (campaignId: number) => {
    toast({
      title: "Campaign Rejected",
      description: "The campaign has been rejected.",
      variant: "destructive"
    });
  };

  const handleAddPostTracking = (data: any) => {
    console.log("Adding post tracking:", data);
    toast({
      title: "Post URL Added",
      description: "The post URL has been added for tracking.",
    });
    setIsTrackingDialogOpen(false);
    form.reset();
  };

  // Campaign Detail View
  if (view === 'campaign-detail' && selectedCampaign && selectedCampaignData) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setView('campaigns')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Campaigns</span>
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedCampaignData.name}</h2>
              <p className="text-gray-600">{selectedBrandData?.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className={`${getStatusBadge(selectedCampaignData.status)} flex items-center space-x-1`}>
              {getStatusIcon(selectedCampaignData.status)}
              <span>{selectedCampaignData.status}</span>
            </Badge>
            {selectedCampaignData.status === "Pending Approval" && (
              <div className="flex space-x-2">
                <Button 
                  onClick={() => handleApproveCampaign(selectedCampaignData.id)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Approve
                </Button>
                <Button 
                  variant="destructive"
                  onClick={() => handleRejectCampaign(selectedCampaignData.id)}
                >
                  <X className="w-4 h-4 mr-2" />
                  Reject
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{selectedCampaignData.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Budget</p>
                    <p className="font-bold text-blue-600">{selectedCampaignData.budget}</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Spent</p>
                    <p className="font-bold text-green-600">{selectedCampaignData.spent}</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600">Influencers</p>
                    <p className="font-bold text-purple-600">{selectedCampaignData.influencers}</p>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-600">Reach</p>
                    <p className="font-bold text-orange-600">{selectedCampaignData.reach}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Tracked Posts</CardTitle>
                <Dialog open={isTrackingDialogOpen} onOpenChange={setIsTrackingDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="flex items-center space-x-2">
                      <Link className="w-4 h-4" />
                      <span>Add Post URL</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Post URL for Tracking</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleAddPostTracking)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="postUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Post URL</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="https://instagram.com/p/example" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Notes (Optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Add any notes about this post..."
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-end space-x-2">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => setIsTrackingDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button type="submit">Add Post</Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {selectedCampaignData.posts && selectedCampaignData.posts.length > 0 ? (
                  <div className="space-y-3">
                    {selectedCampaignData.posts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <ExternalLink className="w-4 h-4 text-blue-600" />
                          <div>
                            <p className="font-medium text-sm">{post.url}</p>
                            <p className="text-xs text-gray-500">
                              {post.metrics.likes} likes • {post.metrics.comments} comments • {post.metrics.shares} shares
                            </p>
                          </div>
                        </div>
                        <Badge className={getStatusBadge(post.status)}>
                          {post.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <Link className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No posts tracked yet</p>
                    <p className="text-sm">Add post URLs to start tracking performance</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Start Date</span>
                    <span className="font-medium">{selectedCampaignData.startDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">End Date</span>
                    <span className="font-medium">{selectedCampaignData.endDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Engagement</span>
                    <span className="font-medium">{selectedCampaignData.engagement}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ... keep existing campaigns view logic

  if (view === 'campaigns' && selectedBrand) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => {
                setView('brands');
                setSelectedBrand(null);
              }}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Brands</span>
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedBrandData?.name} Campaigns</h2>
              <p className="text-gray-600">{brandCampaigns.length} campaigns total</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandCampaigns.map((campaign) => (
            <Card 
              key={campaign.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => {
                setSelectedCampaign(campaign.id);
                setView('campaign-detail');
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold">{campaign.name}</CardTitle>
                    <CardDescription className="mt-1">{campaign.description}</CardDescription>
                  </div>
                  <Badge className={`${getStatusBadge(campaign.status)} flex items-center space-x-1`}>
                    {getStatusIcon(campaign.status)}
                    <span>{campaign.status}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="font-semibold">{campaign.budget}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Spent</p>
                      <p className="font-semibold">{campaign.spent}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Influencers</p>
                      <p className="font-semibold">{campaign.influencers}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-600">Reach</p>
                      <p className="font-semibold">{campaign.reach}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{campaign.startDate}</span>
                    <span>→</span>
                    <span>{campaign.endDate}</span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-gray-600">Engagement: {campaign.engagement}</span>
                    {campaign.status === "Pending Approval" && (
                      <Badge className="bg-orange-100 text-orange-800">
                        <Clock className="w-3 h-3 mr-1" />
                        Needs Review
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // ... keep existing brands view (main grid)
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Brand Management</h2>
          <p className="text-gray-600">Manage all registered brands and their campaigns</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Building2 className="w-4 h-4" />
          <span>Add New Brand</span>
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search brands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBrands.map((brand) => (
          <Card 
            key={brand.id} 
            className="hover:shadow-lg transition-all cursor-pointer hover:scale-105"
            onClick={() => {
              setSelectedBrand(brand.id);
              setView('campaigns');
            }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <CardTitle className="text-lg">{brand.name}</CardTitle>
                  <CardDescription>{brand.industry}</CardDescription>
                </div>
                <Badge className={getStatusBadge(brand.status)}>
                  {brand.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{brand.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Campaigns</p>
                    <p className="font-semibold">{brand.campaigns}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Play className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Active</p>
                    <p className="font-semibold">{brand.activeCampaigns}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-600">{brand.totalSpend}</span>
                </div>
                <span className="text-sm text-gray-500">Joined {brand.joinDate}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
