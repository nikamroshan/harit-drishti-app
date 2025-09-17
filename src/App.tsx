import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/components/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PredictionPage from "./pages/PredictionPage";
import DiseaseDetectionPage from "./pages/DiseaseDetectionPage";
import ReportsPage from "./pages/ReportsPage";
import WeatherPage from "./pages/WeatherPage";
import ChatPage from "./pages/ChatPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/prediction" element={<PredictionPage />} />
            <Route path="/disease-detection" element={<DiseaseDetectionPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/chat" element={<ChatPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
