import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>React Learn</h2>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink
                to="/roadmap"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">🗺️</span> Roadmap Hub
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/overview"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">📖</span> Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/variables"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">📝</span> Variables & Props
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">🧩</span> Components & Pages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/directives"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">⚡</span> Directives & Pipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/forms"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">📋</span> Forms & Storage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">🖱️</span> Event Listeners
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">🌐</span> Services & HTTP
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/counter"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">🔢</span> State (Counter)
              </NavLink>
            </li>
            <li style={{ marginTop: '1rem', borderTop: '1px solid #30363d', paddingTop: '1rem' }}>
              <span style={{ padding: '0 1.5rem', color: '#8b949e', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Advanced Topics</span>
            </li>
            <li>
              <NavLink
                to="/async"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">⏳</span> Async / RxJS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">🔐</span> Authentication
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/advanced-hooks"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">🧠</span> Advanced Hooks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/state"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="icon">📦</span> State Management
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-bar">
          <h1>Welcome to React</h1>
          <p>Select a lesson from the sidebar to start learning.</p>
        </header>

        <div className="content-wrapper">
          {/* Dynamic components load here */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};
