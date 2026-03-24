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
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollToTop } from "@/components/ui/SmoothScroll";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollProgress />
        <CustomCursor />
        <AnimatedRoutes />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
