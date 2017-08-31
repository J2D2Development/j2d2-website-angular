import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, NavigationEnd } from '@angular/router';

import { GeneralService } from './utilities/general.service';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    menuIsOpen: boolean = false;
    homeMenuStyle: boolean = false;

    constructor(
        public generalService: GeneralService,
        private _router: Router
    ) { }

    ngOnInit() {
        this._router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                this.homeMenuStyle = event['url'] === '/';
            });

        //preload images on home route so no 'flashing' on others- maybe move this to another hook?
        /*
        Below works, but doesn't serve as bg preloading.  Images are loaded on home route, but this is not used in the bg image css on other components.  Maybe have an '_images.scss mixin- reference all images there and use those constants in the individual scss files?  Then it might grab the same reference?
        */
        const aboutBg = new Image();
        const casesBg = new Image();
        const contactBg = new Image();
        const notFoundBg = new Image();
        const projectsBg = new Image();

        aboutBg.src = './assets/img/mtn-sunset-02-bg.jpg';
        casesBg.src = './assets/img/keyboard-bg-sm.jpg';
        contactBg.src = './assets/img/contact-phones-bg.jpg';
        notFoundBg.src = './assets/img/not-found-bg-sm.jpg';
        projectsBg.src = './assets/img/minified-code-bg.jpg';
    }

    toggleMenu() {
        this.menuIsOpen = this.menuIsOpen ? false : true;
    }
}
