import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
