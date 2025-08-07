import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  languages = ['C#', 'HTML5', 'CSS', 'JavaScript', 'TypeScript', 'SQL'];

  technologies = [
    '.NET Core 6/7/8',
    'ASP.NET MVC',
    'Web API',
    'Angular',
    'Entity Framework Core',
    'xUnit',
    'SignalR',
  ];

  tools = [
    'Git',
    'Postman',
    'Visual Studio',
    'Jira',
    'Azure Boards',
    'Docker (learning)',
  ];

  cloudDevOps = [
    'Azure (Blob Storage, App Service, DevOps)',
    'CI/CD pipelines',
    'GitHub',
  ];
}
