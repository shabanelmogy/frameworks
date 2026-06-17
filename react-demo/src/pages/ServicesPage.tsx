import React, { useState, useEffect } from 'react';
import { usersService, type User } from '../services/usersService';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  // Define component state
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await usersService.getUsers();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Lifecycle Hook (run on mount)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lesson-container">
      <h2>Services & Data Fetching in React</h2>
      <p className="lesson-intro">In React, we fetch data using standard tools like <code>fetch</code> or <code>axios</code> inside a <code>useEffect</code> hook, or encapsulate fetching logic within reusable custom hooks to keep our components clean!</p>

      <div className="example-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>Mock API Users</h3>
          <button className="btn-refresh" onClick={fetchData} disabled={isLoading}>
            Refresh Data
          </button>
        </div>

        {isLoading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Fetching users from JSONPlaceholder...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <p>⚠️ {error}</p>
          </div>
        )}

        {!isLoading && !error && users.length > 0 && (
          <div className="users-grid">
            {users.map((user) => (
              <div key={user.id} className="services-user-card">
                <h4>{user.name}</h4>
                <p className="meta">Email: {user.email}</p>
                <p className="meta">Company: {user.company.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
