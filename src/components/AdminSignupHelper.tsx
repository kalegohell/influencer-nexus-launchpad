
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const AdminSignupHelper = () => {
  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="w-5 h-5" />
          <span>Admin Access</span>
        </CardTitle>
        <CardDescription>
          Admin account has been pre-configured
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-600 text-center">
          Use the provided admin credentials to access admin features
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminSignupHelper;
