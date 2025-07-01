
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle
} from "lucide-react";

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

// Mock data for campaigns
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
    description: "Promoting the new summer sports collection through fitness influencers"
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
    description: "Launch campaign for the new Air Max sneaker line"
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
    description: "Summer beverage campaign targeting lifestyle influencers"
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
    description: "Showcase the new iPhone 15 Pro features through tech influencers"
  }
];

export function BrandManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
  const [view, setView] = useState<'brands' | 'campaigns'>('brands');

  const filteredBrands = mockBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedBrandData = selectedBrand ? mockBrands.find(b => b.id === selectedBrand) : null;
  const brandCampaigns = selectedBrand ? mockCampaigns.filter(c => c.brandId === selectedBrand) : [];

  const getStatusBadge = (status: string) => {
    const variants = {
      "Active": "bg-green-100 text-green-800",
      "Completed": "bg-blue-100 text-blue-800",
      "Paused": "bg-yellow-100 text-yellow-800",
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
      default:
        return <Eye className="w-4 h-4" />;
    }
  };

  if (view === 'campaigns' && selectedBrand) {
    return (
      <div className="space-y-6">
        {/* Header */}
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

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandCampaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
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
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
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

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search brands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Brands Grid */}
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
