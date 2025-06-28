
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Users, 
  Eye, 
  Heart, 
  MessageSquare, 
  TrendingUp,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Star,
  DollarSign
} from "lucide-react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";

const Influencers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const influencers = [
    {
      id: 1,
      name: "Sarah Johnson",
      username: "@sarahjstyle",
      email: "sarah@example.com",
      phone: "+1 234 567 8901",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e85022?w=150&h=150&fit=crop&crop=face",
      category: "Fashion",
      followers: 2400000,
      engagement: 4.8,
      rating: 4.9,
      campaigns: ["Summer Collection Launch", "Brand Awareness Drive"],
      status: "Active",
      totalEarnings: 45000,
      completedCampaigns: 12,
      avgViews: 850000,
      avgLikes: 42000,
      platforms: ["Instagram", "YouTube"],
      location: "Los Angeles, CA",
      joinDate: "2023-01-15"
    },
    {
      id: 2,
      name: "Mike Chen",
      username: "@mikefitness",
      email: "mike@example.com",
      phone: "+1 234 567 8902",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      category: "Fitness",
      followers: 1900000,
      engagement: 5.2,
      rating: 4.7,
      campaigns: ["Fitness Challenge"],
      status: "Active",
      totalEarnings: 38000,
      completedCampaigns: 8,
      avgViews: 720000,
      avgLikes: 38000,
      platforms: ["Instagram", "TikTok"],
      location: "New York, NY",
      joinDate: "2023-03-20"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      username: "@emmatech",
      email: "emma@example.com",
      phone: "+1 234 567 8903",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      category: "Technology",
      followers: 1200000,
      engagement: 3.9,
      rating: 4.5,
      campaigns: ["Tech Product Launch"],
      status: "Paused",
      totalEarnings: 22000,
      completedCampaigns: 6,
      avgViews: 450000,
      avgLikes: 18000,
      platforms: ["YouTube", "Instagram"],
      location: "San Francisco, CA",
      joinDate: "2023-02-10"
    },
    {
      id: 4,
      name: "Alex Thompson",
      username: "@alexlifestyle",
      email: "alex@example.com",
      phone: "+1 234 567 8904",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "Lifestyle",
      followers: 3100000,
      engagement: 5.5,
      rating: 4.8,
      campaigns: ["Summer Collection Launch", "Product Review Series"],
      status: "Active",
      totalEarnings: 67000,
      completedCampaigns: 15,
      avgViews: 1200000,
      avgLikes: 65000,
      platforms: ["Instagram", "YouTube", "TikTok"],
      location: "Miami, FL",
      joinDate: "2022-11-05"
    },
    {
      id: 5,
      name: "Lisa Park",
      username: "@lisabeauty",
      email: "lisa@example.com",
      phone: "+1 234 567 8905",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      category: "Beauty",
      followers: 1800000,
      engagement: 4.3,
      rating: 4.6,
      campaigns: ["Brand Awareness Drive"],
      status: "Active",
      totalEarnings: 32000,
      completedCampaigns: 9,
      avgViews: 620000,
      avgLikes: 28000,
      platforms: ["Instagram", "YouTube"],
      location: "Chicago, IL",
      joinDate: "2023-01-30"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Inactive':
        return 'bg-red-100 text-red-800 border-red-200';
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const filteredInfluencers = influencers.filter(influencer => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influencer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influencer.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || influencer.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

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
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Influencers
                      </h1>
                      <p className="text-gray-600">
                        Manage and monitor all influencers working on your brand campaigns
                      </p>
                    </div>
                    <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 rounded-xl px-6 shadow-sm">
                      <Users className="w-4 h-4 mr-2" />
                      Add Influencer
                    </Button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <Card className="bg-white border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Influencers</p>
                          <p className="text-3xl font-bold text-gray-900">{influencers.length}</p>
                        </div>
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Active</p>
                          <p className="text-3xl font-bold text-green-600">
                            {influencers.filter(i => i.status === 'Active').length}
                          </p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Reach</p>
                          <p className="text-3xl font-bold text-purple-600">
                            {formatNumber(influencers.reduce((sum, i) => sum + i.followers, 0))}
                          </p>
                        </div>
                        <Eye className="w-8 h-8 text-purple-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                          <p className="text-3xl font-bold text-orange-600">
                            {formatCurrency(influencers.reduce((sum, i) => sum + i.totalEarnings, 0))}
                          </p>
                        </div>
                        <DollarSign className="w-8 h-8 text-orange-600" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search influencers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white border-gray-200"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* Influencers Table */}
                <Card className="bg-white border border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Influencer Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Influencer</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Followers</TableHead>
                          <TableHead>Engagement</TableHead>
                          <TableHead>Rating</TableHead>
                          <TableHead>Active Campaigns</TableHead>
                          <TableHead>Earnings</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredInfluencers.map((influencer) => (
                          <TableRow key={influencer.id} className="hover:bg-gray-50">
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={influencer.avatar} alt={influencer.name} />
                                  <AvatarFallback>{influencer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium text-gray-900">{influencer.name}</p>
                                  <p className="text-sm text-gray-500">{influencer.username}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {influencer.category}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-medium">
                              {formatNumber(influencer.followers)}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4 text-pink-500" />
                                <span className="font-medium">{influencer.engagement}%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-medium">{influencer.rating}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                {influencer.campaigns.map((campaign, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {campaign}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell className="font-medium text-green-600">
                              {formatCurrency(influencer.totalEarnings)}
                            </TableCell>
                            <TableCell>
                              <Badge className={`${getStatusColor(influencer.status)} border font-medium`}>
                                {influencer.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" className="text-xs">
                                  View
                                </Button>
                                <Button variant="outline" size="sm" className="text-xs">
                                  Contact
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
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Influencers;
