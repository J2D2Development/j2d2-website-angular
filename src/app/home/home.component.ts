import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { fader, slideIn } from '../utilities/router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideIn(),
    fader()
  ],
  host: {
    '[@fader]': 'true'
  }
})
export class HomeComponent implements OnInit {
  language: string = '';

  constructor() { }

  ngOnInit() {
  }

  selectLanguage(lan) {
    this.language = lan;
  }

}
