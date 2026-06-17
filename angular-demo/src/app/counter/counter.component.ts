import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  // 1. Defining a Signal
  // ⚛️ React equivalent: const [count, setCount] = useState(0);
  // We initialize it with 0
  count = signal(0);

  // 2. Computed Signal
  // ⚛️ React equivalent: const isEven = useMemo(() => count % 2 === 0, [count]);
  // This automatically recalculates when `count` changes
  isEven = computed(() => this.count() % 2 === 0);

  // 3. Methods to update the signal
  increment() {
    // ⚛️ React equivalent: setCount(prev => prev + 1);
    // We use .update() when the new value depends on the previous value
    this.count.update(currentValue => currentValue + 1);
  }

  decrement() {
    this.count.update(currentValue => currentValue - 1);
  }

  reset() {
    // ⚛️ React equivalent: setCount(0);
    // We use .set() when we just want to replace the value
    this.count.set(0);
  }
}
