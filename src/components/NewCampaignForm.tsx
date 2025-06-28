
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Plus, Calendar, DollarSign, Users, Target, Briefcase } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface CampaignFormData {
  title: string;
  description: string;
  budget: number;
  duration: number;
  influencerType: 'micro' | 'macro' | 'mega';
  targetAudience: string;
  campaignGoals: string;
  contentType: string;
  platforms: string;
  timeline: string;
  kpis: string;
}

interface NewCampaignFormProps {
  onSubmit: (data: CampaignFormData) => void;
}

export function NewCampaignForm({ onSubmit }: NewCampaignFormProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<CampaignFormData>({
    defaultValues: {
      title: '',
      description: '',
      budget: 0,
      duration: 30,
      influencerType: 'micro',
      targetAudience: '',
      campaignGoals: '',
      contentType: '',
      platforms: '',
      timeline: '',
      kpis: ''
    }
  });

  const handleSubmit = (data: CampaignFormData) => {
    onSubmit(data);
    form.reset();
    setOpen(false);
    toast.success("Campaign submitted for approval!", {
      description: "Your campaign will be reviewed by our agency team."
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6 shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
            <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
            Create New Campaign
          </DialogTitle>
          <DialogDescription>
            Fill out the details below to create your influencer marketing campaign. 
            Our team will review and approve it before going live.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Campaign Title *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Summer Collection Launch 2024" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Campaign Description *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your campaign objectives, target message, and key deliverables..."
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Budget & Timeline */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                Budget & Timeline
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Budget (USD) *</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="25000" 
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Campaign Duration (Days) *</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="30" 
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Timeline</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Start in 2 weeks, peak during holidays" {...field} />
                    </FormControl>
                    <FormDescription>When would you like this campaign to run?</FormDescription>
                  </FormItem>
                )}
              />
            </div>

            {/* Influencer Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-600" />
                Influencer Requirements
              </h3>
              
              <FormField
                control={form.control}
                name="influencerType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Influencer Tier *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="micro" id="micro" />
                          <label htmlFor="micro" className="text-sm font-medium">
                            Micro Influencers (1K - 100K followers)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="macro" id="macro" />
                          <label htmlFor="macro" className="text-sm font-medium">
                            Macro Influencers (100K - 1M followers)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mega" id="mega" />
                          <label htmlFor="mega" className="text-sm font-medium">
                            Mega Influencers (1M+ followers)
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="platforms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Platforms *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Instagram, TikTok, YouTube" {...field} />
                    </FormControl>
                    <FormDescription>Which social media platforms should be included?</FormDescription>
                  </FormItem>
                )}
              />
            </div>

            {/* Campaign Strategy */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center">
                <Target className="w-5 h-5 mr-2 text-orange-600" />
                Campaign Strategy
              </h3>
              
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g., Women aged 18-35, interested in fashion and lifestyle, primarily in North America..."
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="campaignGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Campaign Goals *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g., Increase brand awareness, drive website traffic, boost sales..."
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Requirements</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Instagram posts, Stories, Reels, YouTube videos" {...field} />
                    </FormControl>
                    <FormDescription>What type of content do you need?</FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="kpis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Performance Indicators (KPIs)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Reach, Engagement Rate, Click-through Rate, Conversions" {...field} />
                    </FormControl>
                    <FormDescription>How will you measure campaign success?</FormDescription>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Submit for Approval
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
