import React, { useState, useMemo, useEffect, useRef } from 'react';
import './RoadmapPage.css';

export const AdvancedHooksPage: React.FC = () => {
  const [basePrice, setBasePrice] = useState<number>(100);
  const [taxRate, setTaxRate] = useState<number>(0.2);
  const renderCount = useRef(0);

  // 1. Computed Value (React equivalent of Angular computed())
  const finalPrice = useMemo(() => {
    return basePrice + (basePrice * taxRate);
  }, [basePrice, taxRate]);

  // 2. Effect (React equivalent of Angular effect())
  useEffect(() => {
    // This runs whenever finalPrice changes
    document.title = `Total: $${finalPrice.toFixed(2)}`;
    
    return () => {
      document.title = 'React Learn'; // Cleanup
    };
  }, [finalPrice]);

  // Track renders
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="lesson-container">
      <h2>Advanced Hooks (Signals Equivalents)</h2>
      <p className="lesson-intro">
        Angular 16+ introduced <strong>Signals</strong> (<code>signal</code>, <code>computed</code>, <code>effect</code>). In React, we use <code>useState</code> for signals, <code>useMemo</code> for computed values, and <code>useEffect</code> for side effects.
      </p>

      <div className="example-card">
        <h3>Computed Values & Side Effects</h3>
        <p className="explanation">
          Adjust the inputs below. Notice how the Total Price is derived automatically using <code>useMemo</code>, and the browser tab title updates automatically via <code>useEffect</code>.
        </p>

        <div className="demo-box" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#c9d1d9' }}>Base Price ($):</label>
            <input 
              type="number" 
              className="input-field" 
              value={basePrice}
              onChange={(e) => setBasePrice(Number(e.target.value))}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#c9d1d9' }}>Tax Rate (%):</label>
            <input 
              type="number" 
              className="input-field" 
              value={taxRate * 100}
              onChange={(e) => setTaxRate(Number(e.target.value) / 100)}
            />
          </div>

          <div style={{ padding: '15px', background: 'rgba(88, 166, 255, 0.1)', borderLeft: '4px solid #58a6ff', borderRadius: '4px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#58a6ff' }}>Derived State (Computed)</h4>
            <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>
              Total Price: ${finalPrice.toFixed(2)}
            </p>
          </div>
          
          <p style={{ fontSize: '0.85rem', color: '#8b949e', fontStyle: 'italic', margin: 0 }}>
            Component Render Count: {renderCount.current}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedHooksPage;
