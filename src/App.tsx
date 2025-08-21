import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import SmartToilet from "./pages/SmartToilet";
import OnePieceToilet from "./pages/OnePieceToilet";
import Basin from "./pages/Basin";
import Bath from "./pages/Bath";
import ShowerEnclosure from "./pages/ShowerEnclosure";
import Inspiration from "./pages/Inspiration";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/smart-toilet" element={<SmartToilet />} />
          <Route path="/one-piece-toilet" element={<OnePieceToilet />} />
          <Route path="/basin" element={<Basin />} />
          <Route path="/bath" element={<Bath />} />
          <Route path="/shower-enclosure" element={<ShowerEnclosure />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
