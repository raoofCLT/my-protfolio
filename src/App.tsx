
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 relative overflow-x-hidden">
          {/* Animated Background Elements */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl floating-slow" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl floating-slow" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-600/3 rounded-full blur-2xl floating-slow" style={{ animationDelay: '6s' }} />
          </div>
          
          <CustomCursor />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
