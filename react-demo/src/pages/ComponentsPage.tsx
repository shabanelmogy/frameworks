import React, { useState } from 'react';
import { UserCard } from '../components/UserCard';
import './ComponentsPage.css';

export const ComponentsPage: React.FC = () => {
  // Page-level state
  const pageTitle = "Team Roster";
  const [lastAction, setLastAction] = useState<string>("None");

  // Data that the page manages
  const teamMembers = [
    { name: 'Alice Smith', role: 'Frontend Engineer', init: 'AS' },
    { name: 'Bob Jones', role: 'Backend Engineer', init: 'BJ' },
    { name: 'Charlie Brown', role: 'Designer', init: 'CB' }
  ];

  // Logic handled by the page when a child component emits an event
  const handleMessage = (userName: string) => {
    setLastAction(`You sent a message to ${userName}!`);
  };

  return (
    <div className="lesson-container">
      <h2>Pages vs Components in React</h2>
      <p className="lesson-intro">In React, there is no technical difference between a "Page" and a "Component". They are both just React components (typically functional components)!</p>

      <div className="example-card">
        <h3>The Conceptual Difference</h3>
        <p className="explanation">
          <strong>A "Page" (Smart Component):</strong> Is rendered by a Route. It manages local/global state, coordinates data fetching, and structures the main layout. <br /><br />
          <strong>A "Component" (Dumb/Presentational Component):</strong> Is reusable UI. It has no routing or data-fetching logic. It simply receives data via <code>props</code> and communicates actions back up via callback function props.
        </p>
        
        <div className="dashed-demo-box" style={{ marginTop: '20px' }}>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>{pageTitle}</h3>
          
          {/* We loop through our data and pass it to the Reusable Component */}
          {/* We also pass a callback prop to handle events emitted from the child */}
          {teamMembers.map((member) => (
            <UserCard 
              key={member.name}
              name={member.name} 
              role={member.role}
              initials={member.init}
              onMessageUser={handleMessage}
            />
          ))}

          {lastAction !== 'None' && (
            <div className="status-bar">
              <span style={{ fontSize: '1.2rem' }}>💬</span> {lastAction}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ComponentsPage;
