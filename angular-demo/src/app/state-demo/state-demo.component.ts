import { Component, Injectable, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. State Definition
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

// 2. Service-based State Store (NgRx / SignalStore equivalent)
@Injectable({ providedIn: 'root' })
export class CartStore {
  // Private mutable state signal
  private state = signal<CartState>(initialState);

  // Public readonly selectors
  readonly items = computed(() => this.state().items);
  readonly total = computed(() => this.state().total);

  // Actions / Reducers
  addItem(product: Product) {
    this.state.update(s => ({
      ...s,
      items: [...s.items, product],
      total: s.total + product.price
    }));
  }

  removeItem(productId: number) {
    this.state.update(s => {
      const index = s.items.findIndex(i => i.id === productId);
      if (index === -1) return s;
      
      const itemToRemove = s.items[index];
      const newItems = [...s.items];
      newItems.splice(index, 1);
      
      return {
        items: newItems,
        total: s.total - itemToRemove.price
      };
    });
  }

  clearCart() {
    this.state.set(initialState);
  }
}

@Component({
  selector: 'app-state-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state-demo.component.html',
  styleUrl: './state-demo.component.css'
})
export class StateDemoComponent {
  AVAILABLE_PRODUCTS: Product[] = [
    { id: 1, name: 'Angular Course', price: 99.99 },
    { id: 2, name: 'React Course', price: 89.99 },
    { id: 3, name: 'TypeScript Book', price: 29.99 }
  ];

  // Inject the Store
  constructor(public cartStore: CartStore) {}
}
