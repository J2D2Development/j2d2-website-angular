import { Component, OnInit } from '@angular/core';
import { faderFromLeft, faderDelayFromLeft } from '../utilities/router.animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [ faderFromLeft(), faderDelayFromLeft() ]
})
export class ProjectsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
