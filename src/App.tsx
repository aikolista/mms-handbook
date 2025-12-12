import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppProvider, Frame } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';

import Navigation from './components/Navigation';
import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';
import MissionVisionPage from './pages/MissionVisionPage';
import RolesPage from './pages/RolesPage';
import MetricsPage from './pages/MetricsPage';
import CompensationPage from './pages/CompensationPage';
import ToolsPage from './pages/ToolsPage';
import PTOPage from './pages/PTOPage';
import ProcessesPage from './pages/ProcessesPage';
import ResourcesPage from './pages/ResourcesPage';
import MeetingsPage from './pages/MeetingsPage';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = () => {
    setMobileNavigationActive((active) => !active);
  };

  return (
    <>
      <TopBar />
      <div style={{ marginTop: '64px' }}>
        <Frame
          navigation={
            <Navigation
              location={location.pathname}
              onNavigate={(path) => {
                navigate(path);
                setMobileNavigationActive(false);
              }}
            />
          }
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
        >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission-vision" element={<MissionVisionPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="/compensation" element={<CompensationPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/pto" element={<PTOPage />} />
        <Route path="/processes" element={<ProcessesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
      </Routes>
    </Frame>
    </div>
    </>
  );
}

export default function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </AppProvider>
  );
}

