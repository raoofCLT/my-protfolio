
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
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Space Background with Animated Stars */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Starfield Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
            {/* Animated Stars */}
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
            
            {/* Larger moving stars */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute w-2 h-2 bg-blue-200 rounded-full floating-star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          
          {/* Enhanced 3D Floating Objects */}
          <div className="absolute top-1/4 right-10 transform -translate-y-1/2 hidden lg:block">
            <div className="space-cube">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
          </div>
          
          <div className="absolute top-3/4 left-10 transform -translate-y-1/2 hidden lg:block">
            <div className="space-sphere"></div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 hidden lg:block">
            <div className="space-pyramid"></div>
          </div>
          
          <div className="absolute top-1/3 left-1/3 transform -translate-y-1/2 hidden lg:block">
            <div className="space-torus"></div>
          </div>
        </div>
        
        <Navbar />
        
        {/* Single Page Sections with Different Backgrounds */}
        <section id="home" className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
          <Home />
        </section>
        
        <section id="about" className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-transparent"></div>
          <About />
        </section>
        
        <section id="projects" className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/25 via-teal-900/15 to-transparent"></div>
          <Projects />
        </section>
        
        <section id="contact" className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-fuchsia-900/20 to-transparent"></div>
          <Contact />
        </section>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
