import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'axa',
      position: 'axa',
      period: 'axa',
      achievements: 'axa',
      technologies: ['.NET', 'Angular 19', 'SQL Server', 'SignalR', 'Azure DevOps', 'RBAC', 'CI/CD']
    },
    {
      company: 'harmoni',
      position: 'harmoni',
      period: 'harmoni',
      achievements: 'harmoni',
      technologies: ['.NET Core', 'Web API', 'Microservices', 'Git']
    },
    {
      company: 'bytes',
      position: 'bytes',
      period: 'bytes',
      achievements: 'bytes',
      technologies: ['.NET Framework', 'Web API', 'SQL Server', 'eCommerce']
    }
  ];
}
