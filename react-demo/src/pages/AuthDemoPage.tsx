import React, { useState } from 'react';
import './RoadmapPage.css';

export const AuthDemoPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = () => {
    // Mock login API call
    const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.MockToken123456789";
    setToken(mockToken);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <div className="lesson-container">
      <h2>Authentication & Route Protection</h2>
      <p className="lesson-intro">
        In Angular, we use <code>CanActivate</code> Route Guards and <code>HttpInterceptors</code>. In React, we typically use Context API combined with Wrapper Components (e.g., <code>&lt;ProtectedRoute&gt;</code>) to control access to routes and attach tokens.
      </p>

      <div className="example-card" style={{ marginBottom: '20px' }}>
        <h3>1. Authentication State</h3>
        <div className="demo-box">
          <p>Status: <strong style={{ color: isAuthenticated ? '#2ea043' : '#f85149' }}>
            {isAuthenticated ? 'Logged In (Authenticated)' : 'Logged Out (Guest)'}
          </strong></p>
          
          {isAuthenticated && (
            <p style={{ wordBreak: 'break-all' }}>
              <strong>JWT Token:</strong> <code style={{ fontSize: '0.8rem' }}>{token}</code>
            </p>
          )}

          <div style={{ marginTop: '15px' }}>
            {!isAuthenticated ? (
              <button className="btn" onClick={handleLogin}>Log In</button>
            ) : (
              <button className="btn-danger" onClick={handleLogout}>Log Out</button>
            )}
          </div>
        </div>
      </div>

      <div className="example-card">
        <h3>2. Protected Content (Mock Route Guard)</h3>
        <p className="explanation">
          If this were a separate route, React Router would check the auth state before rendering the component. Here we simulate it with conditional rendering.
        </p>
        <div className="demo-box" style={{ background: isAuthenticated ? 'rgba(46, 160, 67, 0.1)' : 'rgba(248, 81, 73, 0.1)', borderLeftColor: isAuthenticated ? '#2ea043' : '#f85149' }}>
          {isAuthenticated ? (
            <div>
              <h4 style={{ color: '#2ea043', marginTop: 0 }}>🔓 Access Granted: Dashboard</h4>
              <p>Welcome back! You can only see this content because you hold a valid JWT token.</p>
            </div>
          ) : (
            <div>
              <h4 style={{ color: '#f85149', marginTop: 0 }}>🔒 Access Denied</h4>
              <p>You must log in to view this content. In a real app, you would be redirected to the <code>/login</code> route.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthDemoPage;
