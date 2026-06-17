import React, { useReducer } from 'react';
import './StateDemoPage.css';

// 1. State Definition (Redux/NgRx pattern)
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: Product[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0
};

// 2. Actions (NgRx Actions)
type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_CART' };

// 3. Reducer (NgRx Reducer)
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
    case 'REMOVE_ITEM':
      const index = state.items.findIndex(i => i.id === action.payload);
      if (index === -1) return state;
      const itemToRemove = state.items[index];
      const newItems = [...state.items];
      newItems.splice(index, 1);
      return {
        ...state,
        items: newItems,
        total: state.total - itemToRemove.price
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}

const AVAILABLE_PRODUCTS: Product[] = [
  { id: 1, name: 'Angular Course', price: 99.99 },
  { id: 2, name: 'React Course', price: 89.99 },
  { id: 3, name: 'TypeScript Book', price: 29.99 }
];

export const StateDemoPage: React.FC = () => {
  // 4. Store Initialization (NgRx Store equivalent)
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="lesson-container">
      <h2>Global State Management</h2>
      <p className="lesson-intro">
        In Angular, complex state is often managed by <strong>NgRx</strong> or <strong>SignalStore</strong> using Actions, Reducers, and Selectors. 
        In React, the built-in <code>useReducer</code> hook provides the exact same pattern natively, or we use Redux Toolkit.
      </p>

      <div className="roadmap-grid" style={{ flexDirection: 'row', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Products List */}
        <div className="example-card" style={{ flex: 1, minWidth: '300px' }}>
          <h3>Available Products</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {AVAILABLE_PRODUCTS.map(product => (
              <div key={product.id} className="demo-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#e6edf3' }}>{product.name}</h4>
                  <span style={{ color: '#8b949e' }}>${product.price}</span>
                </div>
                <button 
                  className="btn-sm" 
                  onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart State */}
        <div className="example-card" style={{ flex: 1, minWidth: '300px', backgroundColor: 'rgba(35, 134, 54, 0.05)', borderColor: '#238636' }}>
          <h3 style={{ color: '#2ea043' }}>Shopping Cart State</h3>
          <p className="explanation">State is updated immutably via Reducer actions.</p>
          
          <div style={{ background: '#0d1117', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            {state.items.length === 0 ? (
              <p style={{ color: '#8b949e', fontStyle: 'italic', margin: 0 }}>Cart is empty</p>
            ) : (
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3' }}>
                {state.items.map((item, idx) => (
                  <li key={`${item.id}-${idx}`} style={{ marginBottom: '5px' }}>
                    {item.name} (${item.price})
                    <button 
                      style={{ background: 'none', border: 'none', color: '#f85149', cursor: 'pointer', marginLeft: '10px' }}
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    >
                      [x]
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #30363d', paddingTop: '15px' }}>
            <h3 style={{ margin: 0 }}>Total: ${state.total.toFixed(2)}</h3>
            {state.items.length > 0 && (
              <button className="btn-danger" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear</button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StateDemoPage;
