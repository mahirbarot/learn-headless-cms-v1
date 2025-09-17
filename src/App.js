import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { fetchContent, getDefaultContent } from './utils/contentLoader';

function App() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        // Fetch content from CMS
        const cmsContent = await fetchContent();
        setContent(cmsContent);
        setLoading(false);
      } catch (error) {
        console.error('Error loading content:', error);
        setContent(getDefaultContent());
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading content...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero hero={content?.hero} />
        <Features features={content?.features} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
