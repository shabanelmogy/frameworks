import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// We define an interface for the shape of our data
export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

// ⚛️ React equivalent: A custom hook containing fetching logic (e.g., `useFetchUsers`)
// OR a Redux Thunk/Saga file.
// In Angular, we use `@Injectable` classes to isolate logic and data fetching from our UI.
@Injectable({
  // `providedIn: 'root'` means Angular will automatically create one single instance
  // of this service for the entire application (a Singleton).
  providedIn: 'root'
})
export class UsersService {
  // ⚛️ React equivalent: `import axios from 'axios';`
  // We use Angular's built-in Dependency Injection to get the HttpClient
  private http = inject(HttpClient);
  
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // This method returns an Observable. 
  // ⚛️ React equivalent: Returning a Promise from an async function.
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
