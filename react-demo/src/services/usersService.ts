// We define an interface for the shape of our data
export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

// React equivalent of Angular service
// In Angular, we use `@Injectable` classes to isolate logic and data fetching from our UI.
// In React, we can isolate this logic into helper modules or custom hooks.
export const usersService = {
  getUsers: async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }
};
