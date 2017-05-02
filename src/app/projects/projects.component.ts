import { Component, OnInit } from '@angular/core';
import { fader } from '../utilities/router.animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [ fader() ],
  host: {
    '[@fader]': 'state'
  }
})
export class ProjectsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
