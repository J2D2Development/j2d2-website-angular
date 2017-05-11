import { Component, OnInit } from '@angular/core';
import { faderFromLeft, faderDelayFromLeft, shrinkUp } from '../utilities/router.animations';
import { CasesService } from './cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
  animations: [ faderFromLeft(), faderDelayFromLeft(), shrinkUp() ]
})
export class CasesComponent implements OnInit {

  constructor(
    public casesService: CasesService
  ) { }

  ngOnInit() {
    this.casesService.updatePreviewBarState('full');
  }

  updatePreviewBarState(state): void {
    this.casesService.updatePreviewBarState(state);
  }
}
