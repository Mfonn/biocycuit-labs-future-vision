import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import AgenticAI from "./pages/AgenticAI";
import SecurityGovernance from "./pages/SecurityGovernance";
import DeepResearch from "./pages/DeepResearch";
import Research from "./pages/Research";
import AutismNeurodivergence from "./pages/research/AutismNeurodivergence";
import WaterResearch from "./pages/research/WaterResearch";
import Numerology from "./pages/research/Numerology";
import MyceliumElectrodeArrays from "./pages/research/MyceliumElectrodeArrays";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/security-governance" element={<SecurityGovernance />} />
          <Route path="/deep-research" element={<DeepResearch />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/autism-neurodivergence" element={<AutismNeurodivergence />} />
          <Route path="/research/water" element={<WaterResearch />} />
          <Route path="/research/numerology" element={<Numerology />} />
          <Route path="/research/mycelium-electrode-arrays" element={<MyceliumElectrodeArrays />} />

          {/* Legacy routes */}
          <Route path="/agentic-ai-wellness" element={<Navigate to="/agentic-ai" replace />} />
          <Route path="/biotechnology-consulting" element={<Navigate to="/services" replace />} />
          <Route path="/education" element={<Navigate to="/services" replace />} />
          <Route path="/shop" element={<Navigate to="/services" replace />} />
          <Route path="/biotech-workshops" element={<Navigate to="/services" replace />} />
          <Route path="/machine-learning-data" element={<Navigate to="/services" replace />} />
          <Route path="/consulting/*" element={<Navigate to="/services" replace />} />
          <Route path="/course/*" element={<Navigate to="/services" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
