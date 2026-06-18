import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TimelineSection from './components/Timeline';
import Statistics from './components/Statistics';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="relative">
        {/* Custom Cursor (Desktop only) */}
        <CustomCursor />

        {/* Loading Screen */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Main Content */}
        {!isLoading && (
          <>
            <Navbar />
            <main className="relative">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Statistics />
              <TimelineSection />
              <Certifications />
              <Blog />
              <Contact />
            </main>
            <Footer />
            <AIAssistant />
            <ScrollToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
