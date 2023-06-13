import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../../models/work-experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  @Input() workExperience: WorkExperience | undefined;

  constructor() {}
}
