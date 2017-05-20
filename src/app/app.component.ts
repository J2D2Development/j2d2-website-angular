import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

import { GeneralService } from './utilities/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    menuIsOpen: boolean = false;

    constructor(
        public generalService: GeneralService
    ) {

    }

    ngOnInit() {
        /*
            Trying to preload all bg images on home route so there's no flash when navigating.  
            However, when compiling, Angular adds a random string to all images (cache buster?).  
            So these preload properly, but then a completely different file is loaded.  
            Is there a way to get the full img file names Angular creates and use them here?
        */
        // const aboutBg = new Image();
        // const casesBg = new Image();
        // const contactBg = new Image();
        // const notFoundBg = new Image();
        // const projectsBg = new Image();

        // aboutBg.src = '../assets/img/mtn-sunset-02-bg.jpg';
        // casesBg.src = '../assets/img/keyboard-bg-sm.jpg';
        // contactBg.src = '../assets/img/contact-phones-bg.jpg';
        // notFoundBg.src = '../assets/img/not-found-bg-sm.jpg';
        // projectsBg.src = '../assets/img/minified-code-bg.jpg';
        
        // projectsBg.onload = () => console.log('projects bg loaded!');
    }

    toggleMenu() {
        this.menuIsOpen = this.menuIsOpen ? false : true;
    }
}
