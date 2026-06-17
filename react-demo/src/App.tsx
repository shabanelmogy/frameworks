import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { Variables } from './pages/Variables';
import { ComponentsPage } from './pages/ComponentsPage';
import { EventsPage } from './pages/EventsPage';
import { ServicesPage } from './pages/ServicesPage';
import { CounterPage } from './pages/CounterPage';
import { DirectivesPage } from './pages/DirectivesPage';
import { FormsPage } from './pages/FormsPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { AsyncDemoPage } from './pages/AsyncDemoPage';
import { AuthDemoPage } from './pages/AuthDemoPage';
import { AdvancedHooksPage } from './pages/AdvancedHooksPage';
import { StateDemoPage } from './pages/StateDemoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/roadmap" replace />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="overview" element={<Overview />} />
          <Route path="variables" element={<Variables />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="directives" element={<DirectivesPage />} />
          <Route path="forms" element={<FormsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="async" element={<AsyncDemoPage />} />
          <Route path="auth" element={<AuthDemoPage />} />
          <Route path="advanced-hooks" element={<AdvancedHooksPage />} />
          <Route path="state" element={<StateDemoPage />} />
          <Route path="*" element={<Navigate to="/roadmap" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
