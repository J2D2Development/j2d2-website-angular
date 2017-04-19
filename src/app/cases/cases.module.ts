import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { CaseOneComponent } from './caseone.component';
import { CasesRouting } from './cases.routes';

@NgModule({
  imports: [
    CommonModule,
    CasesRouting
  ],
  declarations: [
      CasesComponent,
      CaseOneComponent
  ]
})
export class CasesModule { }
