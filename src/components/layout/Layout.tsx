import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import CosmicBackground from './CosmicBackground';
import Footer from './Footer';
import PageTransition from '../animations/PageTransition';

const Layout = () => {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <CosmicBackground />
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {isMounted && (
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;