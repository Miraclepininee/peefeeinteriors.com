import React from 'react';
import { Hero } from '../components/Hero';
import { BrandIntro } from '../components/BrandIntro';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ServicesOverview } from '../components/ServicesOverview';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessSection } from '../components/ProcessSection';
import { ClosingCTA } from '../components/ClosingCTA';
import { ProjectItem } from '../data/brandData';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenLightbox: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  return (
    <div className="animate-fade-in">
      <Hero
        onStartProject={() => onNavigate('contact')}
        onExploreWork={() => onNavigate('projects')}
        onWatchVideo={() => onNavigate('about')}
      />

      <BrandIntro
        onLearnMore={() => onNavigate('about')}
      />

      <FeaturedProjects
        onOpenLightbox={onOpenLightbox}
        onViewCollection={(cat) => onNavigate(`projects/${cat}`)}
        onViewAllProjects={() => onNavigate('projects')}
      />

      <ServicesOverview
        onSelectService={(serviceId) => onNavigate('contact', { service: serviceId })}
        onViewAllServices={() => onNavigate('services')}
      />

      <WhyChooseUs
        onStartProject={() => onNavigate('contact')}
      />

      <ProcessSection />

      <ClosingCTA
        onStartProject={() => onNavigate('contact')}
      />
    </div>
  );
};
