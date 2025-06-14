
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen relative overflow-x-hidden bg-space-dark">
          {/* Enhanced Space Background with Seamless Theme Support */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Deep Space Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-black dark:block hidden">
              {/* Animated Stars - More Subtle */}
              {[...Array(150)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-slate-300 rounded-full star-twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                    opacity: Math.random() * 0.6 + 0.2,
                  }}
                />
              ))}
              
              {/* Moving Constellation Points */}
              {[...Array(30)].map((_, i) => (
                <div
                  key={`constellation-${i}`}
                  className="absolute w-1 h-1 bg-blue-200/60 rounded-full constellation-drift"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                  }}
                />
              ))}
            </div>

            {/* Light Theme Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 light:block dark:hidden">
              {/* Subtle geometric patterns for light theme */}
              {[...Array(50)].map((_, i) => (
                <div
                  key={`light-pattern-${i}`}
                  className="absolute w-1 h-1 bg-slate-400/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.3 + 0.1,
                  }}
                />
              ))}
            </div>
          </div>
          
          <Navbar />
          
          {/* Seamless Section Layout - No Visible Boundaries */}
          <section id="home" className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-800/20 dark:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-transparent to-blue-50/20 light:block dark:hidden"></div>
            <Home />
          </section>
          
          <section id="about" className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-indigo-900/15 dark:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/15 light:block dark:hidden"></div>
            <About />
          </section>

          <section id="skills" className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-purple-900/15 dark:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/20 via-transparent to-purple-50/15 light:block dark:hidden"></div>
            <Skills />
          </section>
          
          <section id="projects" className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-violet-900/15 dark:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-violet-50/15 light:block dark:hidden"></div>
            <Projects />
          </section>
          
          <section id="contact" className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-teal-900/15 dark:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 via-transparent to-teal-50/15 light:block dark:hidden"></div>
            <Contact />
          </section>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
