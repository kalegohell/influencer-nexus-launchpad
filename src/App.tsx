
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Influencers from "./pages/Influencers";
import AnalyticsPage from "./pages/Analytics";
import Admin from "./pages/Admin";
import AdminBrands from "./pages/AdminBrands";
import AdminInfluencers from "./pages/AdminInfluencers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/brands" element={<AdminBrands />} />
          <Route path="/admin/influencers" element={<AdminInfluencers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
