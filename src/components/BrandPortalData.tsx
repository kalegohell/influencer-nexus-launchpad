
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Share,
  Eye,
  Calendar
} from "lucide-react";

interface TrackedPost {
  id: number;
  url: string;
  metrics: {
    likes: number;
    comments: number;
    shares: number;
    views?: number;
    engagement_rate?: number;
  };
  status: string;
  tracked_date: string;
  influencer_name?: string;
  platform: string;
}

interface BrandPortalDataProps {
  campaignId: number;
  campaignName: string;
  trackedPosts: TrackedPost[];
}

export function BrandPortalData({ campaignId, campaignName, trackedPosts }: BrandPortalDataProps) {
  const totalEngagement = trackedPosts.reduce((sum, post) => 
    sum + post.metrics.likes + post.metrics.comments + post.metrics.shares, 0
  );

  const averageEngagement = trackedPosts.length > 0 
    ? (totalEngagement / trackedPosts.length).toFixed(1) 
    : '0';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campaign Performance</h2>
          <p className="text-gray-600">{campaignName}</p>
        </div>
        <Badge className="bg-blue-100 text-blue-800">
          {trackedPosts.length} Posts Tracked
        </Badge>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Likes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-2xl font-bold">
                {trackedPosts.reduce((sum, post) => sum + post.metrics.likes, 0).toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <span className="text-2xl font-bold">
                {trackedPosts.reduce((sum, post) => sum + post.metrics.comments, 0).toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Shares</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Share className="w-5 h-5 text-green-500" />
              <span className="text-2xl font-bold">
                {trackedPosts.reduce((sum, post) => sum + post.metrics.shares, 0).toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <span className="text-2xl font-bold">{averageEngagement}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Posts List */}
      <Card>
        <CardHeader>
          <CardTitle>Tracked Posts</CardTitle>
          <CardDescription>Performance data for all tracked social media posts</CardDescription>
        </CardHeader>
        <CardContent>
          {trackedPosts.length > 0 ? (
            <div className="space-y-4">
              {trackedPosts.map((post) => (
                <div key={post.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="capitalize">
                        {post.platform}
                      </Badge>
                      {post.influencer_name && (
                        <span className="text-sm text-gray-600">by {post.influencer_name}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{post.tracked_date}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Post</span>
                      </a>
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <div>
                        <p className="text-sm text-gray-600">Likes</p>
                        <p className="font-semibold">{post.metrics.likes.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                      <div>
                        <p className="text-sm text-gray-600">Comments</p>
                        <p className="font-semibold">{post.metrics.comments.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Share className="w-4 h-4 text-green-500" />
                      <div>
                        <p className="text-sm text-gray-600">Shares</p>
                        <p className="font-semibold">{post.metrics.shares.toLocaleString()}</p>
                      </div>
                    </div>
                    {post.metrics.views && (
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-orange-500" />
                        <div>
                          <p className="text-sm text-gray-600">Views</p>
                          <p className="font-semibold">{post.metrics.views.toLocaleString()}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {post.metrics.engagement_rate && (
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Engagement Rate</span>
                        <Badge className="bg-purple-100 text-purple-800">
                          {post.metrics.engagement_rate}%
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <ExternalLink className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-lg font-medium">No posts tracked yet</p>
              <p className="text-sm">Posts will appear here once the admin adds tracking URLs</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
