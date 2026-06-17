import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  link?: string;
  isCompleted?: boolean;
}

interface RoadmapSection {
  title: string;
  topics: RoadmapTopic[];
}

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css'
})
export class RoadmapComponent implements OnInit {
  
  ROADMAP_DATA: RoadmapSection[] = [
    {
      title: "1. Core Fundamentals",
      topics: [
        { id: "overview", title: "Project Structure & Basics", description: "Angular CLI, Project Structure, Bootstrapping", link: "/overview" },
        { id: "variables", title: "Components & Data Binding", description: "Interpolation, Property Binding, Event Binding", link: "/variables" },
        { id: "directives", title: "Directives & Pipes", description: "Built-in Directives (*ngIf, *ngFor), Custom Directives, Pipes", link: "/directives" },
        { id: "components", title: "Component Communication", description: "@Input, @Output, Lifecycle Hooks", link: "/components" },
      ]
    },
    {
      title: "2. Intermediate Concepts",
      topics: [
        { id: "forms", title: "Forms & Validation", description: "Template-Driven Forms, Reactive Forms, Validators", link: "/forms" },
        { id: "services", title: "Dependency Injection & Services", description: "Services, Providers, Hierarchical DI", link: "/services" },
        { id: "events", title: "Routing & Navigation", description: "Routes, RouterOutlet, Lazy Loading", link: "/events" },
      ]
    },
    {
      title: "3. Advanced Concepts (New!)",
      topics: [
        { id: "async", title: "RxJS & Asynchronous Patterns", description: "Observables, Subjects, Operators (map, switchMap, debounceTime)", link: "/async" },
        { id: "auth", title: "Authentication & Route Guards", description: "JWT, CanActivate Guards, Interceptors", link: "/auth" },
        { id: "adv-signals", title: "Advanced Signals", description: "computed(), effect(), linkedSignal(), resource()", link: "/advanced-signals" },
        { id: "state", title: "State Management", description: "Global State, Signal Store, NgRx basics", link: "/state" },
      ]
    }
  ];

  completedTopics: Record<string, boolean> = {};

  get totalTopics(): number {
    return this.ROADMAP_DATA.reduce((acc, section) => acc + section.topics.length, 0);
  }

  get completedCount(): number {
    return Object.values(this.completedTopics).filter(Boolean).length;
  }

  get progressPercent(): number {
    return Math.round((this.completedCount / this.totalTopics) * 100);
  }

  ngOnInit() {
    const saved = localStorage.getItem('angular_roadmap_progress');
    if (saved) {
      this.completedTopics = JSON.parse(saved);
    }
  }

  toggleTopic(id: string) {
    this.completedTopics[id] = !this.completedTopics[id];
    localStorage.setItem('angular_roadmap_progress', JSON.stringify(this.completedTopics));
  }
}
