import { Component, OnInit } from '@angular/core';
import { faderFromLeft, faderDelayFromLeft } from '../utilities/router.animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [ faderFromLeft(), faderDelayFromLeft() ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
