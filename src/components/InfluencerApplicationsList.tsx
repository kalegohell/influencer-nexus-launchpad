
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Linkedin,
  Twitter,
  ExternalLink,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  Users
} from 'lucide-react';

interface InfluencerApplication {
  id: string;
  full_name: string;
  email: string;
  contact_number?: string;
  location?: string;
  bio?: string;
  niche?: string;
  follower_range?: string;
  engagement_rate?: number;
  instagram_handle?: string;
  youtube_handle?: string;
  tiktok_handle?: string;
  twitter_handle?: string;
  linkedin_handle?: string;
  portfolio_url?: string;
  min_rate?: number;
  max_rate?: number;
  barter_available: boolean;
  content_types?: string[];
  collaboration_types?: string[];
  status: string;
  created_at: string;
}

const InfluencerApplicationsList = () => {
  const [applications, setApplications] = useState<InfluencerApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('influencer_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error: any) {
      console.error('Error fetching applications:', error);
      toast({
        title: "Error",
        description: "Failed to fetch influencer applications",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('influencer_applications')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setApplications(prev => 
        prev.map(app => app.id === id ? { ...app, status } : app)
      );

      toast({
        title: "Status Updated",
        description: `Application ${status} successfully`,
      });
    } catch (error: any) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="text-center">Loading applications...</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Influencer Applications</h1>
          <p className="text-gray-600 mt-2">Review and manage influencer applications</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">{applications.length}</p>
          <p className="text-sm text-gray-600">Total Applications</p>
        </div>
      </div>

      <div className="grid gap-6">
        {applications.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Applications Yet</h3>
              <p className="text-gray-600">Influencer applications will appear here once submitted.</p>
            </CardContent>
          </Card>
        ) : (
          applications.map((application) => (
            <Card key={application.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      <User className="w-5 h-5 mr-2 text-blue-600" />
                      {application.full_name}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Mail className="w-4 h-4 mr-1" />
                      {application.email}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {getStatusBadge(application.status)}
                    <p className="text-xs text-gray-500">
                      {new Date(application.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {application.contact_number && (
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm">{application.contact_number}</span>
                    </div>
                  )}
                  {application.location && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm">{application.location}</span>
                    </div>
                  )}
                </div>

                {/* Bio */}
                {application.bio && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                    <p className="text-sm text-gray-600">{application.bio}</p>
                  </div>
                )}

                {/* Influencer Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {application.niche && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Niche</h4>
                      <Badge variant="outline">{application.niche}</Badge>
                    </div>
                  )}
                  {application.follower_range && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Followers</h4>
                      <Badge variant="outline">{application.follower_range}</Badge>
                    </div>
                  )}
                  {application.engagement_rate && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Engagement Rate</h4>
                      <Badge variant="outline">{application.engagement_rate}%</Badge>
                    </div>
                  )}
                </div>

                {/* Social Media Handles */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                  <div className="flex flex-wrap gap-2">
                    {application.instagram_handle && (
                      <Badge variant="secondary" className="flex items-center">
                        <Instagram className="w-3 h-3 mr-1" />
                        {application.instagram_handle}
                      </Badge>
                    )}
                    {application.youtube_handle && (
                      <Badge variant="secondary" className="flex items-center">
                        <Youtube className="w-3 h-3 mr-1" />
                        {application.youtube_handle}
                      </Badge>
                    )}
                    {application.tiktok_handle && (
                      <Badge variant="secondary" className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {application.tiktok_handle}
                      </Badge>
                    )}
                    {application.twitter_handle && (
                      <Badge variant="secondary" className="flex items-center">
                        <Twitter className="w-3 h-3 mr-1" />
                        {application.twitter_handle}
                      </Badge>
                    )}
                    {application.linkedin_handle && (
                      <Badge variant="secondary" className="flex items-center">
                        <Linkedin className="w-3 h-3 mr-1" />
                        {application.linkedin_handle}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Content Types */}
                {application.content_types && application.content_types.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Types</h4>
                    <div className="flex flex-wrap gap-1">
                      {application.content_types.map((type, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Collaboration Types */}
                {application.collaboration_types && application.collaboration_types.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collaboration Preferences</h4>
                    <div className="flex flex-wrap gap-1">
                      {application.collaboration_types.map((type, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(application.min_rate || application.max_rate) && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Rate Range
                      </h4>
                      <p className="text-sm text-gray-600">
                        ${application.min_rate || 0} - ${application.max_rate || 0}
                      </p>
                    </div>
                  )}
                  {application.barter_available && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Barter Available</h4>
                      <Badge className="bg-green-100 text-green-800">Yes</Badge>
                    </div>
                  )}
                  {application.portfolio_url && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Portfolio</h4>
                      <a 
                        href={application.portfolio_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        View Portfolio
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Action Buttons */}
                {application.status === 'pending' && (
                  <div className="flex justify-end space-x-3">
                    <Button
                      variant="outline"
                      onClick={() => updateApplicationStatus(application.id, 'rejected')}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                    <Button
                      onClick={() => updateApplicationStatus(application.id, 'approved')}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default InfluencerApplicationsList;
