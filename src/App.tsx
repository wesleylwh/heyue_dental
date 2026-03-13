import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/Home';
import { ExpertsPage } from './pages/Experts';
import { ProjectsPage } from './pages/Projects';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { CasesPage } from './pages/Cases';
import { AboutPage } from './pages/About';
import { PROJECTS } from './constants';
import { QRModal } from './components/QRModal';
import type { Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [projectsData, setProjectsData] = useState<Project[]>(PROJECTS);

  const openConsultation = () => setIsQRModalOpen(true);

  useEffect(() => {
    const url = new URL('services.json', window.location.href).toString();
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('no services.json');
        return res.json();
      })
      .then((data: unknown) => {
        if (Array.isArray(data) && data.length > 0) {
          const valid = data.every(d => typeof d?.id === 'string' && typeof d?.title === 'string');
          if (valid) setProjectsData(data as Project[]);
        }
      })
      .catch(() => {
      });
  }, []);

  const renderContent = () => {
    if (selectedProjectId) {
      const project = projectsData.find(p => p.id === selectedProjectId);
      if (project) {
        return (
          <ProjectDetailPage
            project={project}
            onBack={() => setSelectedProjectId(null)}
            onOpenConsultation={openConsultation}
          />
        );
      }
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomePage 
            onOpenConsultation={openConsultation} 
            onNavigateToProjects={() => setActiveTab('projects')} 
          />
        );
      case 'experts':
        return <ExpertsPage onOpenConsultation={openConsultation} />;
      case 'projects':
        return <ProjectsPage projects={projectsData} onSelectProject={(id) => setSelectedProjectId(id)} />;
      case 'cases':
        return <CasesPage onOpenConsultation={openConsultation} />;
      case 'about':
        return <AboutPage onOpenConsultation={openConsultation} />;
      default:
        return <HomePage onOpenConsultation={openConsultation} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedProjectId(null);
        }} 
        onOpenConsultation={openConsultation}
      />
      
      <main className="flex-1 ml-24 md:ml-64 p-8 md:p-12 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProjectId || activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <QRModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </div>
  );
}
