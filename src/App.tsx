import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectCollectionPage } from './pages/ProjectCollectionPage';
import { ContactPage } from './pages/ContactPage';
import { PROJECTS, ProjectItem } from './data/brandData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('interior-design');
  const [activeLightboxProject, setActiveLightboxProject] = useState<ProjectItem | null>(null);

  // Sync with browser hash on initial load and popstate
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash.startsWith('projects/')) {
        setCurrentPage(hash);
      } else if (['home', 'about', 'services', 'projects', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    parseHash();
    window.addEventListener('popstate', parseHash);
    return () => window.removeEventListener('popstate', parseHash);
  }, []);

  const handleNavigate = (page: string, params?: Record<string, string>) => {
    if (params?.service) {
      setSelectedServiceForContact(params.service);
    }
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (project: ProjectItem) => {
    setActiveLightboxProject(project);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxProject(null);
  };

  const renderContent = () => {
    if (currentPage === 'about') {
      return (
        <AboutPage
          onStartProject={() => handleNavigate('contact')}
        />
      );
    }

    if (currentPage === 'services') {
      return (
        <ServicesPage
          onSelectService={(serviceId) => handleNavigate('contact', { service: serviceId })}
          onStartProject={() => handleNavigate('contact')}
        />
      );
    }

    if (currentPage === 'projects') {
      return (
        <ProjectsPage
          onOpenLightbox={handleOpenLightbox}
          onSelectCollection={(cat) => handleNavigate(`projects/${cat}`)}
          onStartProject={() => handleNavigate('contact')}
        />
      );
    }

    if (currentPage === 'projects/residential') {
      return (
        <ProjectCollectionPage
          category="residential"
          onBackToAll={() => handleNavigate('projects')}
          onOpenLightbox={handleOpenLightbox}
          onStartProject={() => handleNavigate('contact')}
        />
      );
    }

    if (currentPage === 'projects/commercial') {
      return (
        <ProjectCollectionPage
          category="commercial"
          onBackToAll={() => handleNavigate('projects')}
          onOpenLightbox={handleOpenLightbox}
          onStartProject={() => handleNavigate('contact')}
        />
      );
    }

    if (currentPage === 'projects/luxury') {
      return (
        <ProjectCollectionPage
          category="luxury"
          onBackToAll={() => handleNavigate('projects')}
          onOpenLightbox={handleOpenLightbox}
          onStartProject={() => handleNavigate('contact')}
        />
      );
    }

    if (currentPage === 'contact') {
      return (
        <ContactPage
          initialServiceId={selectedServiceForContact}
        />
      );
    }

    // Default to Home
    return (
      <HomePage
        onNavigate={handleNavigate}
        onOpenLightbox={handleOpenLightbox}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141312] selection:bg-[#C5A880]/30 selection:text-[#141312]">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Global Lightbox Viewer */}
      <LightboxModal
        project={activeLightboxProject}
        allProjects={PROJECTS}
        onClose={handleCloseLightbox}
        onSelectProject={(p) => setActiveLightboxProject(p)}
        onEnquire={(serviceId) => {
          handleCloseLightbox();
          handleNavigate('contact', { service: serviceId });
        }}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}
