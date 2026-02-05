import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import KurumsalPage from "@/pages/KurumsalPage";
import AkademikPage from "@/pages/AkademikPage";
import IletisimPage from "@/pages/IletisimPage";
import KayitPage from "@/pages/KayitPage";
import KayitSureciPage from "@/pages/KayitSureciPage";
import OnKayitPage from "@/pages/OnKayitPage";
import KampusPage from "@/pages/KampusPage";
import ProgramlarPage from "@/pages/ProgramlarPage";
import HaberlerPage from "@/pages/HaberlerPage";
import BasarilarPage from "@/pages/BasarilarPage";
import VeliOgrenciPage from "@/pages/VeliOgrenciPage";
import NotFound from "@/pages/not-found";
import { useLocation } from "wouter";
import { useEffect } from "react";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          
          <Route path="/kurumsal" component={KurumsalPage} />
          <Route path="/kurumsal/:slug" component={KurumsalPage} />
          
          <Route path="/akademik" component={AkademikPage} />
          <Route path="/akademik/:slug" component={AkademikPage} />

          <Route path="/kampus" component={KampusPage} />
          <Route path="/kampus/:tab" component={KampusPage} />

          <Route path="/programlar" component={ProgramlarPage} />
          <Route path="/programlar/:slug" component={ProgramlarPage} />

          <Route path="/haberler" component={HaberlerPage} />
          <Route path="/haberler/:slug" component={HaberlerPage} />
          <Route path="/duyurular" component={HaberlerPage} />

          <Route path="/basarilar" component={BasarilarPage} />
          <Route path="/basarilar/:category" component={BasarilarPage} />

          <Route path="/veli-ogrenci" component={VeliOgrenciPage} />
          <Route path="/veli-ogrenci/:tab" component={VeliOgrenciPage} />

          <Route path="/iletisim" component={IletisimPage} />
          <Route path="/kayit" component={KayitPage} /> 
          <Route path="/kayit/kayit-sureci" component={KayitSureciPage} />
          <Route path="/kayit/on-kayit" component={OnKayitPage} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
