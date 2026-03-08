import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Research from "./pages/Research";
import BiotechnologyConsulting from "./pages/BiotechnologyConsulting";
import Education from "./pages/Education";
import Shop from "./pages/Shop";
import BiotechWorkshops from "./pages/BiotechWorkshops";
import MachineLearningData from "./pages/MachineLearningData";
import AutismNeurodivergence from "./pages/research/AutismNeurodivergence";
import WaterResearch from "./pages/research/WaterResearch";
import Numerology from "./pages/research/Numerology";
import MyceliumElectrodeArrays from "./pages/research/MyceliumElectrodeArrays";
import FashionTextiles from "./pages/consulting/FashionTextiles";
import ArchitectureDesign from "./pages/consulting/ArchitectureDesign";
import SportsPerformance from "./pages/consulting/SportsPerformance";
import ResearchDevelopment from "./pages/consulting/ResearchDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/autism-neurodivergence" element={<AutismNeurodivergence />} />
          <Route path="/research/water" element={<WaterResearch />} />
          <Route path="/research/numerology" element={<Numerology />} />
          <Route path="/research/mycelium-electrode-arrays" element={<MyceliumElectrodeArrays />} />
          <Route path="/biotechnology-consulting" element={<BiotechnologyConsulting />} />
          <Route path="/consulting/fashion-textiles" element={<FashionTextiles />} />
          <Route path="/consulting/architecture-design" element={<ArchitectureDesign />} />
          <Route path="/consulting/sports-performance" element={<SportsPerformance />} />
          <Route path="/consulting/research-development" element={<ResearchDevelopment />} />
          <Route path="/education" element={<Education />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/biotech-workshops" element={<BiotechWorkshops />} />
          <Route path="/machine-learning-data" element={<MachineLearningData />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
