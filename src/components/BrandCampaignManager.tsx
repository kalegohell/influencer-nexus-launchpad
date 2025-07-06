
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Eye, Heart, DollarSign, Target, TrendingUp, Clock, Plus } from "lucide-react";
import { NewCampaignForm } from "@/components/NewCampaignForm";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Campaign {
  id: string;
  title: string;
  description: string;
  budget: number;
  duration: number;
  influencer_type: string;
  target_audience: string;
  campaign_goals: string;
  content_type: string;
  platforms: string;
  timeline: string;
  kpis: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export function BrandCampaignManager() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchCampaigns();
    }
  }, [user]);

  const fetchCampaigns = async () => {
    try {
      const { data, error } = await supabase
        .from('campaigns')
        .select('*')
        .eq('brand_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCampaigns(data || []);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      toast({
        title: "Error",
        description: "Failed to fetch campaigns",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNewCampaign = async (formData: any) => {
    try {
      const { data, error } = await supabase
        .from('campaigns')
        .insert({
          brand_id: user?.id,
          title: formData.title,
          description: formData.description,
          budget: formData.budget,
          duration: formData.duration,
          influencer_type: formData.influencerType,
          target_audience: formData.targetAudience,
          campaign_goals: formData.campaignGoals,
          content_type: formData.contentType,
          platforms: formData.platforms,
          timeline: formData.timeline,
          kpis: formData.kpis,
          status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;

      setCampaigns(prev => [data, ...prev]);
      toast({
        title: "Campaign Created!",
        description: "Your campaign has been submitted for approval.",
      });
    } catch (error: any) {
      console.error('Error creating campaign:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create campaign",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'approved':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'completed':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Campaigns</h1>
          <p className="text-gray-600 mt-1">Create and manage your influencer marketing campaigns</p>
        </div>
        <NewCampaignForm onSubmit={handleNewCampaign} />
      </div>

      {/* Campaigns Grid */}
      {campaigns.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No campaigns yet</h3>
            <p className="text-gray-600 mb-6">Create your first campaign to start connecting with influencers</p>
            <NewCampaignForm onSubmit={handleNewCampaign} />
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map(campaign => (
            <Card key={campaign.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden hover:border-gray-300 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                      {campaign.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2">
                      {campaign.description}
                    </CardDescription>
                  </div>
                  <Badge className={`ml-2 ${getStatusColor(campaign.status)} border font-medium`}>
                    {campaign.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Budget Info */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Budget</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {formatCurrency(campaign.budget)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {campaign.duration} days
                    </p>
                  </div>
                </div>

                {/* Campaign Details */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">Influencer Type</p>
                    <p className="font-medium text-gray-900 capitalize">{campaign.influencer_type}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Platforms</p>
                    <p className="font-medium text-gray-900">{campaign.platforms}</p>
                  </div>
                </div>

                {/* Campaign Dates */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Created {new Date(campaign.created_at).toLocaleDateString()}
                  </span>
                </div>

                {/* Status Info */}
                {campaign.status === 'pending' && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-sm text-yellow-800 font-medium mb-1">Awaiting Admin Approval</p>
                    <p className="text-xs text-yellow-600">
                      Your campaign is being reviewed by our team. You'll be notified once it's approved.
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    disabled={campaign.status === 'pending'}
                  >
                    {campaign.status === 'pending' ? 'Pending' : 'Edit'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
