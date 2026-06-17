import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RoadmapPage.css';

interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  link?: string;
  isCompleted?: boolean;
}

interface RoadmapSection {
  title: string;
  topics: RoadmapTopic[];
}

const ROADMAP_DATA: RoadmapSection[] = [
  {
    title: "1. Core Fundamentals",
    topics: [
      { id: "overview", title: "Project Structure & Basics", description: "Vite, App.tsx, index.html, public folder", link: "/overview" },
      { id: "variables", title: "Variables & Props", description: "useState, normal variables, passing props", link: "/variables" },
      { id: "directives", title: "Directives & Pipes", description: "Conditional rendering (&&), list mapping (.map), helper formatters", link: "/directives" },
      { id: "components", title: "Component Architecture", description: "Smart vs Dumb Components, parent/child communication", link: "/components" },
    ]
  },
  {
    title: "2. Intermediate Concepts",
    topics: [
      { id: "forms", title: "Forms & Validation", description: "Controlled components, state validation, onSubmit", link: "/forms" },
      { id: "services", title: "Data Fetching & Effects", description: "fetch/axios, useEffect, custom hooks", link: "/services" },
      { id: "events", title: "Event Listeners", description: "onClick, onKeyUp, keyboard/mouse events, custom callbacks", link: "/events" },
    ]
  },
  {
    title: "3. Advanced Concepts (New!)",
    topics: [
      { id: "async", title: "Asynchronous Patterns", description: "promises, async/await, useEffect cleanup", link: "/async" },
      { id: "auth", title: "Authentication", description: "Context API, protected routes, localStorage JWT", link: "/auth" },
      { id: "adv-signals", title: "Advanced Hooks", description: "useMemo, useCallback, useRef, useEffect title updates", link: "/advanced-hooks" },
      { id: "state", title: "State Management", description: "useReducer, Redux patterns, global state context", link: "/state" },
    ]
  }
];

export const RoadmapPage: React.FC = () => {
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem('react_roadmap_progress');
    if (saved) {
      setCompletedTopics(JSON.parse(saved));
    }
  }, []);

  const toggleTopic = (id: string) => {
    const updated = { ...completedTopics, [id]: !completedTopics[id] };
    setCompletedTopics(updated);
    localStorage.setItem('react_roadmap_progress', JSON.stringify(updated));
  };

  const totalTopics = ROADMAP_DATA.reduce((acc, section) => acc + section.topics.length, 0);
  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalTopics) * 100);

  return (
    <div className="lesson-container">
      <h2>React 2026 Roadmap Explorer</h2>
      <p className="lesson-intro">
        Track your progress through the ultimate 2026 syllabus. Click the links to navigate directly to the interactive lesson for each topic!
      </p>

      <div className="progress-container">
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p className="progress-text">{completedCount} of {totalTopics} completed ({progressPercent}%)</p>
      </div>

      <div className="roadmap-grid">
        {ROADMAP_DATA.map((section, idx) => (
          <div key={idx} className="roadmap-section">
            <h3 className="section-title">{section.title}</h3>
            <div className="topics-list">
              {section.topics.map((topic) => (
                <div key={topic.id} className={`topic-card ${completedTopics[topic.id] ? 'completed' : ''}`}>
                  <div className="topic-header">
                    <input 
                      type="checkbox" 
                      className="topic-checkbox"
                      checked={!!completedTopics[topic.id]}
                      onChange={() => toggleTopic(topic.id)}
                    />
                    <h4 className="topic-title">{topic.title}</h4>
                  </div>
                  <p className="topic-desc">{topic.description}</p>
                  {topic.link && (
                    <Link to={topic.link} className="topic-link">
                      Go to Lesson <span>→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapPage;
