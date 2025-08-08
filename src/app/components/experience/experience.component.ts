import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  private translate = inject(TranslateService);

  experiences = [
    {
      company: 'axa',
      achievements: [] as string[],
      technologies: ['.NET', 'Angular 19', 'SQL Server', 'SignalR', 'Azure DevOps', 'RBAC', 'CI/CD']
    },
    {
      company: 'harmoni',
      achievements: [] as string[],
      technologies: ['.NET Core', 'Web API', 'Microservices', 'Git']
    },
    {
      company: 'bytes',
      achievements: [] as string[],
      technologies: ['.NET Framework', 'Web API', 'SQL Server', 'eCommerce']
    }
  ];

  ngOnInit() {
    // Load achievements from translations
    this.loadAchievements();

    // Re-load achievements when language changes
    this.translate.onLangChange.subscribe(() => {
      this.loadAchievements();
    });
  }

  private loadAchievements() {
    this.experiences.forEach(exp => {
      const achievementsKey = `experience.companies.${exp.company}.achievements`;
      this.translate.get(achievementsKey).subscribe((achievements: string[]) => {
        if (Array.isArray(achievements)) {
          exp.achievements = achievements;
        }
      });
    });
  }
}
