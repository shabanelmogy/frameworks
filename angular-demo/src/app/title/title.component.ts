import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  // 1. Normal Variable
  // ⚛️ React equivalent: A standard let/const, or a `useRef` if it doesn't trigger a re-render.
  // In Angular, modifying these will trigger a re-render because of Zone.js tracking.
  title = "Angular 18";
  description = "A fast, modern framework that will feel very familiar to a .NET developer.";
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2560px-Angular_full_color_logo.svg.png";

  // 2. Signal Variable
  // ⚛️ React equivalent: const [signalExample, setSignalExample] = useState("...")
  // Reactive variable, use .set() or .update() to change.
  signalExample = signal<string>("This is a signal variable");

  // 3. Optional Signal Input (Like [Parameter] in Blazor)
  // ⚛️ React equivalent: const { optionalInput = "Default Optional Input Value" } = props;
  // Can be provided by parent component. Has a default value here.
  optionalInput = input<string>("Default Optional Input Value");

  // 4. Required Signal Input (Like [Parameter, EditorRequired] in Blazor)
  // ⚛️ React equivalent: A prop in a TS interface without the '?' (e.g. requiredInput: string;)
  // MUST be provided by the parent component, no default value.
  requiredInput = input.required<string>();

}
