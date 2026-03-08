import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResearchOnWater from "./pages/ResearchOnWater";
import BiotechnologyConsulting from "./pages/BiotechnologyConsulting";
import Education from "./pages/Education";
import Shop from "./pages/Shop";
import BiotechWorkshops from "./pages/BiotechWorkshops";
import MachineLearningData from "./pages/MachineLearningData";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research-on-water" element={<ResearchOnWater />} />
          <Route path="/biotechnology-consulting" element={<BiotechnologyConsulting />} />
          <Route path="/education" element={<Education />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/biotech-workshops" element={<BiotechWorkshops />} />
          <Route path="/machine-learning-data" element={<MachineLearningData />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
