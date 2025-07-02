
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Influencers from "./pages/Influencers";
import AnalyticsPage from "./pages/Analytics";
import Admin from "./pages/Admin";
import AdminBrands from "./pages/AdminBrands";
import AdminInfluencers from "./pages/AdminInfluencers";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/campaigns" element={
            <ProtectedRoute requireUserType="brand">
              <Campaigns />
            </ProtectedRoute>
          } />
          <Route path="/influencers" element={
            <ProtectedRoute requireUserType="brand">
              <Influencers />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute requireUserType="brand">
              <AnalyticsPage />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute requireUserType="admin">
              <Admin />
            </ProtectedRoute>
          } />
          <Route path="/admin/brands" element={
            <ProtectedRoute requireUserType="admin">
              <AdminBrands />
            </ProtectedRoute>
          } />
          <Route path="/admin/influencers" element={
            <ProtectedRoute requireUserType="admin">
              <AdminInfluencers />
            </ProtectedRoute>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
