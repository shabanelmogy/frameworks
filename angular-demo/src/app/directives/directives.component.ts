import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  // --- States for Directives Demo ---
  // ⚛️ React equivalent: const [isVisible, setIsVisible] = useState(true);
  isVisible = true;

  // ⚛️ React equivalent: const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  items = ['Apple', 'Banana', 'Cherry'];
  newItem = '';

  // --- States for Bindings Demo ---
  // ⚛️ React equivalent: const [isActive, setIsActive] = useState(false);
  isActive = false;

  // ⚛️ React equivalent: const [bgColor, setBgColor] = useState('#21262d');
  bgColor = '#21262d';

  // ⚛️ React equivalent: const [textInput, setTextInput] = useState('Type here...');
  textInput = 'Type here...';

  // --- States for Pipes/Pipelines Demo ---
  // ⚛️ React equivalent: const [rawText, setRawText] = useState('react is awesome');
  rawText = 'angular is awesome';
  price = 12345.67;
  currentDate = new Date();

  // --- Handlers ---
  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
