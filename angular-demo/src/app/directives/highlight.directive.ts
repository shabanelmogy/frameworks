import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Input for custom highlight color, fallback to yellow
  @Input() appHighlight = '';
  // Default background color when not hovered
  @Input() defaultColor = '#30363d';

  constructor(private el: ElementRef) {
    this.setBgColor(this.defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || '#ffd33d', '#000000');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor, '#ffffff');
  }

  private highlight(bgColor: string, textColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = textColor;
  }

  private setBgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
