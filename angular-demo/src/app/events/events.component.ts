import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  
  // Example 1: Basic Click Event
  // ⚛️ React equivalent: <button onClick={onButtonClick}>
  clickCount = 0;
  onButtonClick() {
    this.clickCount++;
  }

  // Example 2: Keyboard & Event Object
  // ⚛️ React equivalent: <input onKeyUp={(e) => onKeyup(e)} />
  lastKeyPressed = 'None';
  onKeyup(event: KeyboardEvent) {
    this.lastKeyPressed = event.key;
  }

  // Example 3: Key Modifiers
  // ⚛️ React equivalent: Requires manual `if (e.key === 'Enter')` inside your onKeyUp handler.
  savedMessage = '';
  onEnterPress(message: string) {
    this.savedMessage = message;
  }

  // Example 4: Mouse Events
  // ⚛️ React equivalent: <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
  hoverStatus = 'Outside box';
  boxColor = '#21262d';
  onMouseEnter() {
    this.hoverStatus = 'Inside box!';
    this.boxColor = '#58a6ff';
  }
  onMouseLeave() {
    this.hoverStatus = 'Outside box';
    this.boxColor = '#21262d';
  }

  // Example 5: Form Events (Focus/Blur/Input)
  // ⚛️ React equivalent: <input onFocus={onFocus} onBlur={onBlur} onChange={onInput} />
  focusStatus = 'Not focused';
  inputValue = '';
  onFocus() { this.focusStatus = 'Focused!'; }
  onBlur() { this.focusStatus = 'Lost focus'; }
  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  // Example 6: Global Events (Window/Document)
  // ⚛️ React equivalent: useEffect(() => { window.addEventListener('resize', onResize); return ... }, [])
  windowWidth = window.innerWidth;
  onResize(event: Event) {
    this.windowWidth = (event.target as Window).innerWidth;
  }

  // Example 7: Custom Events (Output)
  // ⚛️ React equivalent: Passing a callback function as a prop: `const { onMyCustomEvent } = props; onMyCustomEvent(...)`
  // In modern Angular 17.3+, we use the output() function
  myCustomEvent = output<string>();
  emitCustomEvent() {
    this.myCustomEvent.emit("Hello from the child component!");
  }
}
