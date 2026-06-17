import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  // We MUST import the UserCardComponent here so we can use it in the HTML template
  imports: [CommonModule, UserCardComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  // Page-level state
  pageTitle = "Team Roster";
  lastAction = "None";

  // Data that the page fetches/manages
  teamMembers = [
    { name: 'Alice Smith', role: 'Frontend Engineer', init: 'AS' },
    { name: 'Bob Jones', role: 'Backend Engineer', init: 'BJ' },
    { name: 'Charlie Brown', role: 'Designer', init: 'CB' }
  ];

  // Logic handled by the page when a child component emits an event
  handleMessage(userName: string) {
    this.lastAction = `You sent a message to ${userName}!`;
  }
}
