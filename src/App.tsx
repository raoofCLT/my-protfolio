
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen relative overflow-x-hidden bg-space-dark">
        {/* Clean Modern Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-black"></div>
        </div>
        
        <Navbar />
        
        {/* Seamless Section Layout - No Visible Boundaries */}
        <section id="home" className="relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-800/20"></div>
          <Home />
        </section>
        
        <section id="about" className="relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-indigo-900/15"></div>
          <About />
        </section>

        <section id="skills" className="relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-purple-900/15"></div>
          <Skills />
        </section>
        
        <section id="projects" className="relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-violet-900/15"></div>
          <Projects />
        </section>
        
        <section id="contact" className="relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-teal-900/15"></div>
          <Contact />
        </section>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
