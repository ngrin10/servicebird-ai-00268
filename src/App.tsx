
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WaitlistIndex from "./pages/WaitlistIndex";
import OriginalIndex from "./pages/OriginalIndex";
import Onboarding from "./pages/Onboarding";
import Enter from "./pages/Enter";
import Welcome from "./pages/Welcome";
import GetStarted from "./pages/GetStarted";
import LightingJobs from "./pages/LightingJobs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OriginalIndex />} />
            <Route path="/waitlist" element={<WaitlistIndex />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/lighting-jobs" element={<LightingJobs />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
