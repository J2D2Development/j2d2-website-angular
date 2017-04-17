import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CasesComponent } from './cases/cases.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cases', component: CasesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });