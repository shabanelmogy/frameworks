import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, delay, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.css'
})
export class RxjsDemoComponent implements OnInit, OnDestroy {
  searchTerm = '';
  debouncedTerm = '';
  results: string[] = [];
  isSearching = false;

  // RxJS Subjects
  private searchSubject = new Subject<string>();
  private subscription = new Subscription();

  // Mock Database
  private mockDb = ['Angular', 'React', 'Vue', 'Svelte', 'RxJS', 'Redux', 'Signals', 'TypeScript'];

  ngOnInit() {
    // Setting up the RxJS Pipeline
    this.subscription.add(
      this.searchSubject.pipe(
        // Wait 500ms after each keystroke before considering the term
        debounceTime(500),
        
        // Ignore if the next search term is same as previous
        distinctUntilChanged(),
        
        // Tap allows us to perform side effects (like showing a loading spinner)
        tap(term => {
          this.debouncedTerm = term;
          this.isSearching = !!term.trim();
          if (!term.trim()) {
            this.results = [];
          }
        }),

        // SwitchMap cancels the previous observable (e.g. pending API request) if a new one arrives
        switchMap(term => this.mockSearchApi(term))
      ).subscribe(res => {
        this.results = res;
        this.isSearching = false;
      })
    );
  }

  ngOnDestroy() {
    // Prevent memory leaks by unsubscribing when component is destroyed
    this.subscription.unsubscribe();
  }

  // Triggered on every keystroke
  onSearchChange(term: string) {
    this.searchTerm = term;
    this.searchSubject.next(term);
  }

  // Mock API call returning an Observable
  private mockSearchApi(term: string): Observable<string[]> {
    if (!term.trim()) return of([]);

    return of(this.mockDb.filter(item => 
      item.toLowerCase().includes(term.toLowerCase())
    )).pipe(
      delay(800), // Simulate network latency
      catchError(() => of(['Error fetching results']))
    );
  }
}
