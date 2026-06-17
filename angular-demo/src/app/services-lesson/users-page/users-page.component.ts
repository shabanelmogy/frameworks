import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService, User } from '../users.service';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit {
  // 1. Inject the service
  // ⚛️ React equivalent: using a custom hook `const { fetchUsers } = useUsers();`
  private usersService = inject(UsersService);

  // 2. Define reactive state signals
  // ⚛️ React equivalent: const [users, setUsers] = useState([]);
  users = signal<User[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  // 3. Lifecycle Hook (OnInit)
  // ⚛️ React equivalent: useEffect(() => { fetch() }, [])
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.isLoading.set(true);
    this.error.set(null);

    // 4. Subscribe to the Observable returned by our service
    // ⚛️ React equivalent: await fetchUsers() or handling a Promise `.then()`
    this.usersService.getUsers().subscribe({
      next: (data) => {
        // Success
        this.users.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        // Failure
        this.error.set('Failed to fetch users. Please try again.');
        this.isLoading.set(false);
        console.error(err);
      }
    });
  }
}
