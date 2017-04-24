import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slide-in', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void <=> *', animate('500ms ease-in-out'))
    ])
  ]
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
