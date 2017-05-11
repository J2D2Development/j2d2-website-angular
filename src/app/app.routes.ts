import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cases', loadChildren: 'app/cases/cases.module#CasesModule' },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });