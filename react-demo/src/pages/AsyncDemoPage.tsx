import React, { useState, useEffect } from 'react';
import './RoadmapPage.css'; // Reusing some base styles

export const AsyncDemoPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // 1. Debounce Effect (React equivalent of RxJS debounceTime)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce

    // Cleanup function (React equivalent of RxJS takeUntilDestroyed / Subscription cleanup)
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // 2. Fetch/Search Effect (React equivalent of RxJS switchMap)
  useEffect(() => {
    if (!debouncedTerm.trim()) {
      setResults([]);
      return;
    }

    let isCancelled = false;
    setIsSearching(true);

    // Mocking an API call
    const fetchResults = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network latency
      
      if (!isCancelled) {
        const mockDb = ['Angular', 'React', 'Vue', 'Svelte', 'RxJS', 'Redux', 'Signals', 'TypeScript'];
        const filtered = mockDb.filter(item => 
          item.toLowerCase().includes(debouncedTerm.toLowerCase())
        );
        setResults(filtered);
        setIsSearching(false);
      }
    };

    fetchResults();

    // Cleanup: If effect runs again before fetch completes, ignore the old fetch result (switchMap behavior)
    return () => {
      isCancelled = true;
    };
  }, [debouncedTerm]);

  return (
    <div className="lesson-container">
      <h2>Asynchronous Patterns (RxJS Equivalents)</h2>
      <p className="lesson-intro">
        In Angular, <strong>RxJS</strong> (Observables, debounceTime, switchMap) is used heavily for async tasks. In React, we typically combine <code>useEffect</code> with local state and cleanup functions to achieve similar reactive behaviors.
      </p>

      <div className="example-card">
        <h3>Real-time Search with Debounce</h3>
        <p className="explanation">
          Type below. The search waits 500ms after you stop typing before making the "API call" (Debounce). 
          If you type again while a request is pending, the old request result is ignored (SwitchMap behavior).
        </p>

        <div className="demo-box">
          <input
            type="text"
            className="input-field"
            placeholder="Search technologies (e.g. 'React', 'RxJS')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', maxWidth: '400px' }}
          />
          
          <div style={{ marginTop: '20px' }}>
            {isSearching ? (
              <p style={{ color: '#58a6ff' }}>⏳ Searching for "{debouncedTerm}"...</p>
            ) : (
              <ul style={{ paddingLeft: '20px', color: '#e6edf3' }}>
                {results.map((result, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{result}</li>
                ))}
                {!searchTerm && (
                  <li style={{ color: '#8b949e', listStyle: 'none', marginLeft: '-20px' }}>
                    Start typing to see results...
                  </li>
                )}
                {searchTerm && results.length === 0 && (
                  <li style={{ color: '#f85149', listStyle: 'none', marginLeft: '-20px' }}>
                    No results found
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsyncDemoPage;
