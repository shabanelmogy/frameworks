import React from 'react';
import { Link } from 'react-router-dom';
import './Overview.css';

export const Overview: React.FC = () => {
  return (
    <div className="lesson-container">
      <h2>Welcome to React Overview</h2>
      <p className="lesson-intro">
        This learning application is designed to help you master core concepts of modern React.
      </p>

      <div className="example-card">
        <h3>What's in this guide?</h3>
        <p className="explanation">
          Use the sidebar to navigate through the core concepts of React. Each lesson contains rich explanations, live interactive demos, and code snippets detailing how React works under the hood.
        </p>

        <div className="demo-box menu-list">
          <Link to="/variables" className="menu-item">
            <strong>📝 State & Props</strong>
            <span>Learn about component state (useState), passing props, and normal JavaScript variables in components.</span>
          </Link>

          <Link to="/directives" className="menu-item">
            <strong>⚡ Directives & Pipes</strong>
            <span>Understand how Angular's structural/attribute directives and pipelines map to React.</span>
          </Link>

          <Link to="/components" className="menu-item">
            <strong>🧩 Components vs Pages</strong>
            <span>Learn the conceptual difference between a Smart Page Component and a Reusable Dumb Component.</span>
          </Link>
          
          <Link to="/events" className="menu-item">
            <strong>🖱️ Event Listeners</strong>
            <span>Learn how to handle click, keyboard, mouse, and form events, and how to trigger parent callbacks.</span>
          </Link>

          <Link to="/services" className="menu-item">
            <strong>🌐 Data Fetching & Effects</strong>
            <span>Learn how to fetch data from APIs using standard fetch, custom hooks, and the useEffect hook.</span>
          </Link>
          
          <Link to="/counter" className="menu-item">
            <strong>🔢 State (Counter)</strong>
            <span>Learn how to manage component state interactively using React's useState hook.</span>
          </Link>
        </div>
      </div>

      <div className="example-card">
        <h3>Core Philosophy</h3>
        <p className="explanation">
          React is a component-based UI library focused on declarative rendering. Unlike full-fledged frameworks, React gives you the flexibility to choose your own libraries for Routing, Forms, and State Management.
        </p>
        <p className="explanation">
          Modern React uses <strong>Functional Components</strong> and <strong>Hooks</strong>, which allow you to manage state and lifecycle features without writing classes. This makes components highly composable and readable.
        </p>
      </div>
    </div>
  );
};
