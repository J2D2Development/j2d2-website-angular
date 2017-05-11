import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { CaseOneComponent } from './caseone.component';
import { CaseTwoComponent } from './casetwo.component';
import { CaseThreeComponent } from './casethree.component';
import { CasesRouting } from './cases.routes';
import { CasesService } from './cases.service';

@NgModule({
  imports: [
    CommonModule,
    CasesRouting
  ],
  declarations: [
      CasesComponent,
      CaseOneComponent,
      CaseTwoComponent,
      CaseThreeComponent
  ],
  providers: [
    CasesService
  ]
})
export class CasesModule { }
