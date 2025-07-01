
import React, { useState } from 'react';
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
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Search,
  Edit,
  Eye,
  MoreHorizontal,
  Plus,
  Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for brands and influencers
const mockBrands = [
  {
    id: 1,
    name: "Nike Sports",
    email: "admin@nike.com",
    status: "Active",
    campaigns: 12,
    totalSpend: "$45,000",
    joinDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Coca Cola",
    email: "marketing@cocacola.com",
    status: "Active",
    campaigns: 8,
    totalSpend: "$32,000",
    joinDate: "2024-02-20"
  },
  {
    id: 3,
    name: "Apple Inc",
    email: "campaigns@apple.com",
    status: "Pending",
    campaigns: 3,
    totalSpend: "$15,000",
    joinDate: "2024-03-10"
  }
];

const mockInfluencers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    followers: "2.5M",
    engagement: "4.2%",
    category: "Lifestyle",
    status: "Active",
    earnings: "$12,000"
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@example.com",
    followers: "1.8M",
    engagement: "5.1%",
    category: "Tech",
    status: "Active",
    earnings: "$8,500"
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma@example.com",
    followers: "950K",
    engagement: "6.3%",
    category: "Fashion",
    status: "Inactive",
    earnings: "$5,200"
  }
];

export function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Total Brands",
      value: "156",
      change: "+12%",
      icon: Building2,
      color: "text-blue-600"
    },
    {
      title: "Active Influencers",
      value: "2,340",
      change: "+8%",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Total Revenue",
      value: "$1.2M",
      change: "+23%",
      icon: DollarSign,
      color: "text-purple-600"
    },
    {
      title: "Platform Growth",
      value: "34%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      "Active": "bg-green-100 text-green-800",
      "Pending": "bg-yellow-100 text-yellow-800",
      "Inactive": "bg-red-100 text-red-800"
    };
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage brands, influencers, and platform analytics</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add New</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        {["overview", "brands", "influencers"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === tab
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search brands, influencers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === "brands" && (
        <Card>
          <CardHeader>
            <CardTitle>Brand Management</CardTitle>
            <CardDescription>Manage all registered brands and their campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Brand Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Campaigns</TableHead>
                  <TableHead>Total Spend</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockBrands.map((brand) => (
                  <TableRow key={brand.id}>
                    <TableCell className="font-medium">{brand.name}</TableCell>
                    <TableCell>{brand.email}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(brand.status)}>
                        {brand.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{brand.campaigns}</TableCell>
                    <TableCell>{brand.totalSpend}</TableCell>
                    <TableCell>{brand.joinDate}</TableCell>
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
      )}

      {activeTab === "influencers" && (
        <Card>
          <CardHeader>
            <CardTitle>Influencer Management</CardTitle>
            <CardDescription>Manage all registered influencers and their performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Followers</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockInfluencers.map((influencer) => (
                  <TableRow key={influencer.id}>
                    <TableCell className="font-medium">{influencer.name}</TableCell>
                    <TableCell>{influencer.email}</TableCell>
                    <TableCell>{influencer.followers}</TableCell>
                    <TableCell>{influencer.engagement}</TableCell>
                    <TableCell>{influencer.category}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(influencer.status)}>
                        {influencer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{influencer.earnings}</TableCell>
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
      )}

      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New brand registration</p>
                    <p className="text-xs text-gray-600">Apple Inc joined the platform</p>
                  </div>
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Campaign completed</p>
                    <p className="text-xs text-gray-600">Nike Sports campaign ended</p>
                  </div>
                  <span className="text-xs text-gray-500">4h ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New influencer verified</p>
                    <p className="text-xs text-gray-600">Emma Davis profile approved</p>
                  </div>
                  <span className="text-xs text-gray-500">6h ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Building2 className="w-6 h-6" />
                  <span className="text-sm">Add Brand</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Users className="w-6 h-6" />
                  <span className="text-sm">Add Influencer</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <BarChart3 className="w-6 h-6" />
                  <span className="text-sm">View Reports</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Settings className="w-6 h-6" />
                  <span className="text-sm">Settings</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
