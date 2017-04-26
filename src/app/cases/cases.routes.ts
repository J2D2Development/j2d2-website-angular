import { Routes, RouterModule } from '@angular/router';

import { CasesComponent } from './cases.component';
import { CaseOneComponent } from './caseone.component';
import { CaseTwoComponent } from './casetwo.component';
import { CaseThreeComponent } from './casethree.component';

const CasesRoutes = [
    { path: '', component: CasesComponent, children: [
        { path: 'one', component: CaseOneComponent },
        { path: 'two', component: CaseTwoComponent },
        { path: 'three', component: CaseThreeComponent }
    ] }
];

export const CasesRouting = RouterModule.forChild(CasesRoutes);