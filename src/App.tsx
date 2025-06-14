
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MinimalNavbar from "./components/MinimalNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SEOHead from "./components/SEOHead";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SEOHead />
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-white text-gray-900">
        <MinimalNavbar />
        
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        
        <section id="about" className="min-h-screen bg-gray-50">
          <About />
        </section>
        
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        
        <section id="contact" className="min-h-screen bg-gray-50">
          <Contact />
        </section>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
