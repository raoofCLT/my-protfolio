
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from './components/Navbar';
import SinglePagePortfolio from './components/SinglePagePortfolio';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black text-white overflow-hidden">
        {/* Navigation */}
        <Navbar />
        
        {/* Single Page Portfolio */}
        <SinglePagePortfolio />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
