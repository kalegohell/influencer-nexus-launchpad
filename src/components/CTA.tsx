import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, ArrowUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
const CTA = () => {
  const [ctaDialogOpen, setCTADialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const [ctaForm, setCTAForm] = useState({
    companyName: '',
    email: '',
    phone: '',
    budget: '',
    password: ''
  });
  const handleCTASignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const {
        error
      } = await supabase.auth.signUp({
        email: ctaForm.email,
        password: ctaForm.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            full_name: ctaForm.companyName,
            user_type: 'brand',
            company: ctaForm.companyName,
            phone: ctaForm.phone,
            budget: ctaForm.budget
          }
        }
      });
      if (error) throw error;
      toast({
        title: "Account Created Successfully!",
        description: "Please check your email to verify your account before signing in."
      });
      setCTADialogOpen(false);
      setCTAForm({
        companyName: '',
        email: '',
        phone: '',
        budget: '',
        password: ''
      });

      // Redirect to auth page for login
      setTimeout(() => {
        navigate('/auth');
      }, 2000);
    } catch (error: any) {
      toast({
        title: "Signup Failed",
        description: error.message || "Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        {/* Action - Final conversion push */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Brand with
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Proven Results?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Join 5,000+ brands already achieving 12x ROI with data-driven influencer marketing. 
            Get your free strategy session and see how we can transform your campaigns.
          </p>
        </div>

        {/* Urgency and scarcity */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ArrowUp className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Limited Time Offer</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Get Your First Campaign Strategy Session FREE
          </h3>
          <p className="text-white/80 mb-6">
            Normally $500 • Free for the next 50 sign-ups • Includes custom influencer audit & ROI projection
          </p>
          
          <Dialog open={ctaDialogOpen} onOpenChange={setCTADialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-200 mb-4">
                <TrendingUp className="mr-3 w-6 h-6" />
                Claim Your Free Strategy Session
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white/95 backdrop-blur-xl border-white/20 shadow-2xl max-w-md rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-slate-800 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Create Your Brand Account
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCTASignup} className="space-y-6 p-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name" className="text-slate-700 font-medium text-sm">Company Name</Label>
                  <Input id="company-name" value={ctaForm.companyName} onChange={e => setCTAForm({
                  ...ctaForm,
                  companyName: e.target.value
                })} className="bg-white/80 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl h-12 px-4 transition-all duration-200 placeholder:text-slate-400" placeholder="Enter your company name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="work-email" className="text-slate-700 font-medium text-sm">Work Email</Label>
                  <Input id="work-email" type="email" value={ctaForm.email} onChange={e => setCTAForm({
                  ...ctaForm,
                  email: e.target.value
                })} className="bg-white/80 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl h-12 px-4 transition-all duration-200 placeholder:text-slate-400" placeholder="your@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium text-sm">Phone Number</Label>
                  <Input id="phone" type="tel" value={ctaForm.phone} onChange={e => setCTAForm({
                  ...ctaForm,
                  phone: e.target.value
                })} className="bg-white/80 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl h-12 px-4 transition-all duration-200 placeholder:text-slate-400" placeholder="+1 (555) 123-4567" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="current-budget" className="text-slate-700 font-medium text-sm">Current Monthly Marketing Budget</Label>
                  <Input id="current-budget" value={ctaForm.budget} onChange={e => setCTAForm({
                  ...ctaForm,
                  budget: e.target.value
                })} placeholder="$10,000" className="bg-white/80 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl h-12 px-4 transition-all duration-200 placeholder:text-slate-400" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cta-password" className="text-slate-700 font-medium text-sm">Password</Label>
                  <Input id="cta-password" type="password" value={ctaForm.password} onChange={e => setCTAForm({
                  ...ctaForm,
                  password: e.target.value
                })} className="bg-white/80 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl h-12 px-4 transition-all duration-200 placeholder:text-slate-400" placeholder="Create a password" required minLength={6} />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white h-12 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Schedule My Free Session"}
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  No spam. Your information is safe with us. Session typically scheduled within 24 hours.
                </p>
              </form>
            </DialogContent>
          </Dialog>
          
          <p className="text-sm text-white/60">
            ✓ No credit card required ✓ 45-minute session ✓ Custom strategy roadmap
          </p>
        </div>

        {/* Risk reversal and guarantees */}
        <div className="text-center text-white/80">
          <p className="mb-4">🛡️ <strong>100% Risk-Free Guarantee</strong></p>
          <p className="text-sm">
            If we don't improve your influencer marketing ROI by 300% within 90 days, we'll refund your investment completely.
          </p>
        </div>
      </div>
    </section>;
};
export default CTA;