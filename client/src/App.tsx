import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { LanguageProvider } from "@/lib/i18n";
import Home from "@/pages/Home";
import { useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";

const KurumsalPage = lazy(() => import("@/pages/KurumsalPage"));
const AkademikPage = lazy(() => import("@/pages/AkademikPage"));
const IletisimPage = lazy(() => import("@/pages/IletisimPage"));
const KayitPage = lazy(() => import("@/pages/KayitPage"));
const KayitSureciPage = lazy(() => import("@/pages/KayitSureciPage"));
const OnKayitPage = lazy(() => import("@/pages/OnKayitPage"));
const KampusPage = lazy(() => import("@/pages/KampusPage"));
const ProgramlarPage = lazy(() => import("@/pages/ProgramlarPage"));
const HaberlerPage = lazy(() => import("@/pages/HaberlerPage"));
const BasarilarPage = lazy(() => import("@/pages/BasarilarPage"));
const VeliOgrenciPage = lazy(() => import("@/pages/VeliOgrenciPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-[3px] border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

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
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
          <ChatWidget />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
