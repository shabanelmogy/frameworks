import { Routes } from '@angular/router';

// Import our components
import { TitleComponent } from './title/title.component';
import { CounterComponent } from './counter/counter.component';
import { EventsComponent } from './events/events.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfilePageComponent } from './pages-components/profile-page/profile-page.component';
import { UsersPageComponent } from './services-lesson/users-page/users-page.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsStorageComponent } from './forms-storage/forms-storage.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { AuthDemoComponent } from './auth-demo/auth-demo.component';
import { AdvancedSignalsComponent } from './advanced-signals/advanced-signals.component';
import { StateDemoComponent } from './state-demo/state-demo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/roadmap', pathMatch: 'full' },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'variables', component: TitleComponent },
  { path: 'components', component: ProfilePageComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'forms', component: FormsStorageComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'events', component: EventsComponent },
  { path: 'services', component: UsersPageComponent },
  { path: 'async', component: RxjsDemoComponent },
  { path: 'auth', component: AuthDemoComponent },
  { path: 'advanced-signals', component: AdvancedSignalsComponent },
  { path: 'state', component: StateDemoComponent },
  // Fallback route
  { path: '**', redirectTo: '/roadmap' }
];
