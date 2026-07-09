import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { FundamentalsPage } from './pages/FundamentalsPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { HomePage } from './pages/HomePage';
import { LessonsPage } from './pages/LessonsPage';
import { MethodsPage } from './pages/MethodsPage';
import { ModuleDetailPage } from './pages/ModuleDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SearchPage } from './pages/SearchPage';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <div className="graph-paper min-h-screen overflow-x-hidden bg-paper text-navy">
      <ScrollToTop />
      <div className="mx-auto max-w-[1460px] px-6 pb-10 sm:px-8 2xl:px-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/fundamentals/:slug" element={<FundamentalsPage />} />
          <Route path="/methods" element={<MethodsPage />} />
          <Route path="/methods/:slug" element={<ModuleDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
