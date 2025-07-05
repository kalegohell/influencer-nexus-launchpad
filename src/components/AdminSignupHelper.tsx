
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Shield } from 'lucide-react';

const AdminSignupHelper = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const makeUserAdmin = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter an email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.rpc('make_user_admin', {
        user_email: email
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: `User ${email} has been made an admin. They can now access admin features.`,
      });
      setEmail('');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to make user admin",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="w-5 h-5" />
          <span>Admin Helper</span>
        </CardTitle>
        <CardDescription>
          Make any existing user an admin by entering their email
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="admin-email">User Email</Label>
          <Input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
          />
        </div>
        <Button 
          onClick={makeUserAdmin} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Processing..." : "Make Admin"}
        </Button>
        <div className="text-xs text-gray-500 text-center">
          Note: The user must have already signed up first
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminSignupHelper;
