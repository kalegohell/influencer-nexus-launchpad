
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Filter,
  Eye,
  Edit,
  MoreHorizontal,
  Users,
  TrendingUp,
  MapPin,
  Instagram,
  Youtube,
  Twitter
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for influencers with detailed information
const mockInfluencers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "/placeholder.svg",
    followers: "2.5M",
    followersCount: 2500000,
    engagement: "4.2%",
    engagementRate: 4.2,
    niche: "Lifestyle",
    platforms: ["Instagram", "YouTube"],
    demographics: {
      age: "18-34",
      gender: "Female 68%",
      location: "USA"
    },
    location: "Los Angeles, CA",
    status: "Active",
    earnings: "$12,000",
    campaigns: 15,
    rating: 4.8,
    joinDate: "2023-01-15"
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@example.com",
    avatar: "/placeholder.svg",
    followers: "1.8M",
    followersCount: 1800000,
    engagement: "5.1%",
    engagementRate: 5.1,
    niche: "Tech",
    platforms: ["YouTube", "Twitter"],
    demographics: {
      age: "25-44",
      gender: "Male 72%",
      location: "Global"
    },
    location: "San Francisco, CA",
    status: "Active",
    earnings: "$8,500",
    campaigns: 12,
    rating: 4.9,
    joinDate: "2023-02-20"
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma@example.com",
    avatar: "/placeholder.svg",
    followers: "950K",
    followersCount: 950000,
    engagement: "6.3%",
    engagementRate: 6.3,
    niche: "Fashion",
    platforms: ["Instagram", "TikTok"],
    demographics: {
      age: "16-28",
      gender: "Female 85%",
      location: "USA"
    },
    location: "New York, NY",
    status: "Inactive",
    earnings: "$5,200",
    campaigns: 8,
    rating: 4.6,
    joinDate: "2023-03-10"
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    email: "alex@example.com",
    avatar: "/placeholder.svg",
    followers: "3.2M",
    followersCount: 3200000,
    engagement: "3.8%",
    engagementRate: 3.8,
    niche: "Fitness",
    platforms: ["Instagram", "YouTube", "TikTok"],
    demographics: {
      age: "18-35",
      gender: "Male 55%",
      location: "Global"
    },
    location: "Miami, FL",
    status: "Active",
    earnings: "$18,000",
    campaigns: 22,
    rating: 4.7,
    joinDate: "2022-11-05"
  },
  {
    id: 5,
    name: "Lisa Wang",
    email: "lisa@example.com",
    avatar: "/placeholder.svg",
    followers: "1.2M",
    followersCount: 1200000,
    engagement: "7.2%",
    engagementRate: 7.2,
    niche: "Beauty",
    platforms: ["Instagram", "YouTube"],
    demographics: {
      age: "18-32",
      gender: "Female 92%",
      location: "Asia-Pacific"
    },
    location: "Toronto, Canada",
    status: "Active",
    earnings: "$9,800",
    campaigns: 18,
    rating: 4.9,
    joinDate: "2023-01-28"
  }
];

const niches = ["All", "Lifestyle", "Tech", "Fashion", "Fitness", "Beauty", "Food", "Travel"];
const platforms = ["All", "Instagram", "YouTube", "TikTok", "Twitter"];
const locations = ["All", "USA", "Global", "Asia-Pacific", "Europe"];

export function InfluencerDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [minFollowers, setMinFollowers] = useState("");
  const [minEngagement, setMinEngagement] = useState("");

  const filteredInfluencers = useMemo(() => {
    return mockInfluencers.filter(influencer => {
      const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           influencer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           influencer.niche.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesNiche = selectedNiche === "All" || influencer.niche === selectedNiche;
      const matchesPlatform = selectedPlatform === "All" || influencer.platforms.includes(selectedPlatform);
      const matchesLocation = selectedLocation === "All" || influencer.demographics.location === selectedLocation;
      
      const matchesFollowers = !minFollowers || influencer.followersCount >= parseInt(minFollowers);
      const matchesEngagement = !minEngagement || influencer.engagementRate >= parseFloat(minEngagement);

      return matchesSearch && matchesNiche && matchesPlatform && matchesLocation && matchesFollowers && matchesEngagement;
    });
  }, [searchTerm, selectedNiche, selectedPlatform, selectedLocation, minFollowers, minEngagement]);

  const getStatusBadge = (status: string) => {
    const variants = {
      "Active": "bg-green-100 text-green-800",
      "Inactive": "bg-red-100 text-red-800",
      "Pending": "bg-yellow-100 text-yellow-800"
    };
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram": return <Instagram className="w-4 h-4" />;
      case "YouTube": return <Youtube className="w-4 h-4" />;
      case "Twitter": return <Twitter className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Influencer Directory</h1>
          <p className="text-gray-600 mt-1">Comprehensive database of all registered influencers</p>
        </div>
        <div className="text-sm text-gray-500">
          {filteredInfluencers.length} of {mockInfluencers.length} influencers
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search influencers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Niche Filter */}
            <Select value={selectedNiche} onValueChange={setSelectedNiche}>
              <SelectTrigger>
                <SelectValue placeholder="Select niche" />
              </SelectTrigger>
              <SelectContent>
                {niches.map(niche => (
                  <SelectItem key={niche} value={niche}>{niche}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Platform Filter */}
            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger>
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map(platform => (
                  <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Min Followers */}
            <Input
              placeholder="Min followers (e.g., 100000)"
              value={minFollowers}
              onChange={(e) => setMinFollowers(e.target.value)}
              type="number"
            />

            {/* Min Engagement */}
            <Input
              placeholder="Min engagement % (e.g., 3.0)"
              value={minEngagement}
              onChange={(e) => setMinEngagement(e.target.value)}
              type="number"
              step="0.1"
            />
          </div>
        </CardContent>
      </Card>

      {/* Directory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Influencer Database</CardTitle>
          <CardDescription>Complete list of registered influencers with detailed metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Influencer</TableHead>
                <TableHead>Niche</TableHead>
                <TableHead>Platforms</TableHead>
                <TableHead>Followers</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Demographics</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Campaigns</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInfluencers.map((influencer) => (
                <TableRow key={influencer.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium">{influencer.name}</p>
                        <p className="text-sm text-gray-500">{influencer.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{influencer.niche}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      {influencer.platforms.map(platform => (
                        <div key={platform} className="p-1 bg-gray-100 rounded">
                          {getPlatformIcon(platform)}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{influencer.followers}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-green-600">{influencer.engagement}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{influencer.demographics.age}</p>
                      <p className="text-gray-500">{influencer.demographics.gender}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{influencer.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(influencer.status)}>
                      {influencer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{influencer.campaigns}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{influencer.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
