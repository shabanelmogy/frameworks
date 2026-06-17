import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advanced-signals.component.html',
  styleUrl: './advanced-signals.component.css'
})
export class AdvancedSignalsComponent {
  // 1. Writable Signals (React equivalent: useState)
  basePrice = signal<number>(100);
  taxRate = signal<number>(0.2);
  
  // Track renders (not reactive)
  renderCount = 0;

  // 2. Computed Signal (React equivalent: useMemo)
  finalPrice = computed(() => {
    return this.basePrice() + (this.basePrice() * this.taxRate());
  });

  constructor() {
    // 3. Effect (React equivalent: useEffect)
    // Runs once initially, and re-runs whenever signals it reads (finalPrice) change.
    effect(() => {
      document.title = `Total: $${this.finalPrice().toFixed(2)}`;
    });
  }

  // Angular's Change Detection hook to demonstrate that computing signals 
  // doesn't cause unnecessary re-renders of the whole component if inputs don't change.
  ngDoCheck() {
    this.renderCount++;
  }

  updateBasePrice(event: Event) {
    const val = Number((event.target as HTMLInputElement).value);
    this.basePrice.set(val);
  }

  updateTaxRate(event: Event) {
    const val = Number((event.target as HTMLInputElement).value) / 100;
    this.taxRate.set(val);
  }

  ngOnDestroy() {
    document.title = 'Angular Learn'; // Cleanup title
  }
}
