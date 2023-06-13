import { Component } from '@angular/core';
import { WorkExperience } from './models/work-experience.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-portfolio';

  workExperienceOfPt: WorkExperience = {
    date: '10/2022 – present',
    address: 'Istanbul | Turkey',
    position: 'Software developer (part time)',
    companyName: 'P.I Works Inc.',
    experienceDescription: [
      'Learned Software Engineering process improvements and best practices',
      'Developed frontend and backend projects using C# programming language and Angular framework',
      'Maintained strong knowledge of evolving technology trends',
      'Contributed to deployments by resolving issues for optimal results',
      'Developed clear and clean codes for various projects',
      'Used DevOps principles to automate software. Such as applied `ci-cd` processes and deploy projects in kubernetes',
      'Wrote unit tests and test coverages keeped over 70%',
    ],
  };

  workExperienceOfIntern: WorkExperience = {
    date: '07/2022 – 09/2022',
    address: 'Istanbul | Turkey',
    position: 'Software developer (internship)',
    companyName: 'P.I Works Inc.',
    experienceDescription: [],
  };
}
