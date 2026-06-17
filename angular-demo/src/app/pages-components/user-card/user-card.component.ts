import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  // Inputs: Data passed DOWN from the page to this component
  name = input.required<string>();
  role = input.required<string>();
  initials = input<string>('U');

  // Output: Events passed UP from this component to the page
  messageUser = output<string>();
}
