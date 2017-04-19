import { Routes, RouterModule } from '@angular/router';

import { CasesComponent } from './cases.component';
import { CaseOneComponent } from './caseone.component';

const CasesRoutes = [
    { path: '', component: CasesComponent, children: [
        { path: 'one', component: CaseOneComponent }
    ] }
];

export const CasesRouting = RouterModule.forChild(CasesRoutes);