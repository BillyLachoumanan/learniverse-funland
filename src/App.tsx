
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import Quiz from "./pages/Quiz";
import MiniGames from "./pages/MiniGames";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Context Provider
import { UserProgressProvider } from "./context/UserProgressContext";

const queryClient = new QueryClient();

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/quiz/:subjectId/:quizId" element={<Quiz />} />
        <Route path="/games" element={<MiniGames />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProgressProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </UserProgressProvider>
  </QueryClientProvider>
);

export default App;
