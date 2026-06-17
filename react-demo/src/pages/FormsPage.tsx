import React, { useState, useEffect } from 'react';
import './FormsPage.css';

interface FormData {
  username: string;
  email: string;
  role: string;
}

interface FormErrors {
  username?: string;
  email?: string;
}

export const FormsPage: React.FC = () => {
  // 1. Form Fields State
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    role: 'Developer'
  });

  // 2. Validation Errors State
  const [errors, setErrors] = useState<FormErrors>({});
  
  // 3. Persistent Data State (from Local Storage)
  const [savedData, setSavedData] = useState<FormData | null>(null);

  // Load from Local Storage on Mount
  useEffect(() => {
    const localData = localStorage.getItem('react_user_profile');
    if (localData) {
      setSavedData(JSON.parse(localData));
    }
  }, []);

  // 4. Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // 5. Validation Logic
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 6. Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Save to localStorage
      localStorage.setItem('react_user_profile', JSON.stringify(formData));
      setSavedData(formData);
      alert('Data successfully saved to Local Storage!');
    }
  };

  // 7. Clear Storage Handler
  const handleClear = () => {
    localStorage.removeItem('react_user_profile');
    setSavedData(null);
  };

  return (
    <div className="lesson-container">
      <h2>Forms & Local Storage in React</h2>
      <p className="lesson-intro">
        In React, forms are typically implemented as "Controlled Components" where input values are bound to local component state, and validation is evaluated manually or through helper libraries.
      </p>

      <div className="grid-container">
        {/* Form Card */}
        <div className="example-card">
          <h3>User Profile Form</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className={`input-field ${errors.username ? 'error-border' : ''}`}
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
              />
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`input-field ${errors.email ? 'error-border' : ''}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                className="input-field"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Product Manager">Product Manager</option>
              </select>
            </div>

            <button type="submit" className="btn">
              Save Profile
            </button>
          </form>
        </div>

        {/* Display Local Storage Data */}
        <div className="example-card">
          <h3>Local Storage State</h3>
          <p className="explanation">
            Data currently stored in key: <code>react_user_profile</code>
          </p>

          <div className="demo-box">
            {savedData ? (
              <div>
                <p><strong>Username:</strong> {savedData.username}</p>
                <p><strong>Email:</strong> {savedData.email}</p>
                <p><strong>Role:</strong> {savedData.role}</p>
                <button onClick={handleClear} className="btn-danger" style={{ marginTop: '10px' }}>
                  Clear Storage
                </button>
              </div>
            ) : (
              <p style={{ color: '#8b949e', fontStyle: 'italic' }}>No profile data found in Local Storage.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
