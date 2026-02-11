import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TabNavigation from './components/TabNavigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useVehicles } from './hooks/useVehicles';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('camiones');
  const [navHeight, setNavHeight] = useState<number>(132);
  const [tabHeight, setTabHeight] = useState<number>(60);
  const { vehicles, isLoading, error } = useVehicles();
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const tabOptions = [
    { id: 'camiones', label: 'Camiones' },
    { id: 'cortes', label: 'Cortes' },
    { id: 'coches', label: 'Coches' },
    { id: 'fabrica', label: 'Fábrica' },
  ];

  const tabIds = useMemo(() => tabOptions.map(t => t.id), []);


  useLayoutEffect(() => {
    const measure = () => {
      const nav = document.getElementById('app-navbar');
      if (nav) setNavHeight(nav.offsetHeight);
      const tab = document.getElementById('tab-nav-fixed');
      if (tab) {
        setTabHeight(tab.offsetHeight);
      } else {
        setTabHeight(0);
      }
    };

    measure();
    requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Keep activeTab in sync with URL path segment (/cortes, /coches, /fabrica)
  useEffect(() => {
    const path = location.pathname.replace(/^\/+/, ''); // remove leading '/'
    const firstSeg = path.split('/')[0];
    if (!firstSeg) {
      setActiveTab('camiones');
      return;
    }
    if (tabIds.includes(firstSeg)) {
      setActiveTab(firstSeg);
    }
  }, [location.pathname, tabIds]);

  // Navigate when user changes tab via UI
  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setSearchQuery('');
      navigate(`/${tabId}`);
    }
    setActiveTab(tabId);
  };

  // Scroll to top when changing between views (tabs)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);


  const showTabNavigation = useMemo(() => {
    if (location.pathname === '/' || location.pathname === '') return true;
    const p = location.pathname.replace(/^\/+/, '');
    const seg = p.split('/')[0];
    return tabIds.includes(seg);
  }, [location.pathname, tabIds]);

  return (
    <div className="min-h-screen flex flex-col text-gray-900 w-full max-w-full overflow-x-hidden">
      <Navbar />

      {showTabNavigation && (
        <TabNavigation
          options={tabOptions}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          offsetTopPx={navHeight}
          className="w-full"
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      )}

      <main
        className="flex-1 w-full"
        style={{ paddingTop: showTabNavigation ? navHeight + tabHeight : navHeight }}
      >
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full"
          >
            <Outlet context={{ activeTab, navHeight, vehicles, isLoading, error, searchQuery, setSearchQuery }} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
