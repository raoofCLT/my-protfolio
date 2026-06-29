import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { ContactPage } from "@/pages/ContactPage";
import { IdentityCardPage } from "@/pages/IdentityCardPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/id-card" element={<IdentityCardPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const isIdCardRoute = location.pathname === "/id-card";

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <FuturisticBackground />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <AppLayout />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
