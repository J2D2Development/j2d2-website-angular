import { Component, OnInit } from '@angular/core';
import { faderFromLeft, faderDelayFromLeft } from '../utilities/router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ faderFromLeft(), faderDelayFromLeft() ]
})
export class AboutComponent implements OnInit {
  firstjQuerySnippet: string = `$(document).ready(function() {<br />
  &nbsp;&nbsp;&nbsp;&nbsp;$('#userid').focus();<br />
  });`;
  badCodeSnippet: string = `print '{"enabled": "' . $result_profiles['profiles_enabled'] . '", "position": "' . $result_profiles['profile_position'] . '"}'; `;

  constructor() { }

  ngOnInit() {
  }

}
