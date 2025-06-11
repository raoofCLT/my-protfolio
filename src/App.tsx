
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 relative overflow-x-hidden">
        {/* Enhanced 3D Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl floating-slow" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl floating-slow" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-600/3 rounded-full blur-2xl floating-slow" style={{ animationDelay: '6s' }} />
          
          {/* Interactive 3D Floating Objects */}
          <div className="absolute top-1/4 right-10 transform -translate-y-1/2 hidden lg:block">
            <div className="interactive-3d-object">
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
            </div>
          </div>
          
          <div className="absolute top-3/4 left-10 transform -translate-y-1/2 hidden lg:block">
            <div className="floating-sphere"></div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 hidden lg:block">
            <div className="floating-pyramid"></div>
          </div>
        </div>
        
        <Navbar />
        
        {/* Single Page Sections */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
