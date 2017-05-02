import { Component, OnInit } from '@angular/core';
import { fader } from '../utilities/router.animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [ fader() ],
  host: {
    '[@fader]': 'state'
  }
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
