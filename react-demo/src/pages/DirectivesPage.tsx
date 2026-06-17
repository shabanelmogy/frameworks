import React, { useState } from 'react';

export const DirectivesPage: React.FC = () => {
  // --- States for Directives Demo ---
  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // --- States for Bindings Demo ---
  const [isActive, setIsActive] = useState(false);
  const [bgColor, setBgColor] = useState('#21262d');
  const [textInput, setTextInput] = useState('Type here...');

  // --- States for Pipes/Pipelines Demo ---
  const [rawText, setRawText] = useState('react is awesome');
  const [price] = useState(12345.67);
  const [currentDate] = useState(new Date());

  // --- Handlers ---
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  // React equivalents of Angular Pipes (Helper Functions)
  const toTitleCase = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="lesson-container">
      <h2>Directives, Bindings & Pipes</h2>
      <p className="lesson-intro">
        Learn how Angular's template features (Directives, Property/Class/Style Bindings, and Pipes) map to React's native JavaScript and JSX equivalents.
      </p>

      {/* 1. DIRECTIVES SECTION */}
      <div className="example-card">
        <h3>1. Directives (Structural & Attribute)</h3>
        <p className="explanation">
          <strong>Angular:</strong> Uses built-in directives like <code>*ngIf</code> for conditional rendering, <code>*ngFor</code> for lists, and custom attributes to add behavior.<br />
          <strong>React:</strong> Uses standard JavaScript logical operators (<code>&&</code>), conditional operators, and <code>.map()</code>. Behavior directives are handled using local state or hooks.
        </p>

        <div className="demo-box" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Conditional Rendering (*ngIf vs &&) */}
          <div>
            <button className="btn-sm" onClick={() => setIsVisible(!isVisible)}>
              Toggle Visibility (*ngIf)
            </button>
            {isVisible ? (
              <p style={{ marginTop: '5px', color: '#58a6ff' }}>✨ Now you see me! (React condition: <code>isVisible && ...</code>)</p>
            ) : (
              <p style={{ marginTop: '5px', color: '#8b949e' }}>💨 Elements removed from DOM.</p>
            )}
          </div>

          <hr style={{ borderColor: 'var(--border)', margin: '10px 0' }} />

          {/* List Rendering (*ngFor vs .map) */}
          <div>
            <p style={{ fontWeight: 'bold' }}>List Rendering (*ngFor):</p>
            <form onSubmit={handleAddItem} style={{ display: 'flex', gap: '10px', margin: '5px 0' }}>
              <input
                type="text"
                className="input-field"
                style={{ margin: 0 }}
                placeholder="Add fruit..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <button type="submit" className="btn" style={{ margin: 0 }}>Add</button>
            </form>
            <ul>
              {items.map((item, index) => (
                <li key={index} style={{ color: '#e6edf3' }}>{item}</li>
              ))}
            </ul>
          </div>

          <hr style={{ borderColor: 'var(--border)', margin: '10px 0' }} />

          {/* Custom Attribute Directive */}
          <div>
            <p style={{ fontWeight: 'bold' }}>Custom Attribute Directive (Highlight on Hover):</p>
            <div
              style={{
                padding: '10px',
                borderRadius: '4px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: isHovered ? '#ffd33d' : '#30363d',
                color: isHovered ? '#000' : '#fff',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? '⚡ Hovering! (React handles state update)' : 'Hover over me to highlight'}
            </div>
          </div>
        </div>
      </div>

      {/* 2. BINDINGS SECTION */}
      <div className="example-card">
        <h3>2. Property, Class & Style Bindings</h3>
        <p className="explanation">
          <strong>Angular:</strong> Binds properties via brackets <code>[disabled]="isDisabled"</code>, class/style names via <code>[class.active]="isActive"</code> or <code>[style.background-color]="color"</code>, and two-way bindings via <code>[(ngModel)]</code>.<br />
          <strong>React:</strong> Binds attributes directly in JSX (e.g. <code>disabled={"{"}isDisabled{"}"}</code>). Uses <code>className</code> for classes, <code>style</code> objects for inline styles, and Controlled Components for inputs.
        </p>

        <div className="demo-box" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Class and Style Bindings */}
          <div>
            <button
              className={`btn ${isActive ? 'active-btn' : ''}`}
              style={{
                backgroundColor: isActive ? '#238636' : '#21262d',
                border: '1px solid var(--border)',
                marginRight: '10px',
              }}
              onClick={() => setIsActive(!isActive)}
            >
              Toggle Class: {isActive ? 'Active' : 'Inactive'}
            </button>

            <span className="badge" style={{ backgroundColor: bgColor }}>
              Dynamic Style Color
            </span>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              style={{ verticalAlign: 'middle', marginLeft: '10px', cursor: 'pointer' }}
            />
          </div>

          <hr style={{ borderColor: 'var(--border)', margin: '10px 0' }} />

          {/* Two-Way Binding / Controlled Component */}
          <div>
            <p style={{ fontWeight: 'bold' }}>Controlled Component (Two-Way Binding / <code>[(ngModel)]</code>):</p>
            <input
              type="text"
              className="input-field"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <p style={{ fontSize: '0.9em', color: '#8b949e' }}>
              Value in state: <strong>{textInput}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 3. PIPES/PIPELINES SECTION */}
      <div className="example-card">
        <h3>3. Pipes (Pipelines)</h3>
        <p className="explanation">
          <strong>Angular:</strong> Uses the pipe operator <code>|</code> in template expressions to format data: <code>{"{{ value | uppercase }}"}</code>.<br />
          <strong>React:</strong> Uses standard JavaScript expressions, helper functions, or formatting libraries directly inside JSX: <code>{"{ toTitleCase(value) }"}</code>.
        </p>

        <div className="demo-box" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <p><strong>Input Text:</strong></p>
            <input
              type="text"
              className="input-field"
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
            />
          </div>
          <div>
            <p>Title Case Pipe (React: <code>toTitleCase(text)</code>):</p>
            <span className="badge">{toTitleCase(rawText)}</span>
          </div>
          <div>
            <p>Currency Pipe (React: <code>formatCurrency(price)</code>):</p>
            <span className="badge">{formatCurrency(price)}</span>
          </div>
          <div>
            <p>Date Pipe (React: <code>formatDate(date)</code>):</p>
            <span className="badge">{formatDate(currentDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectivesPage;
