import { Routes } from '@angular/router';
import { Mogador } from './pages/mogador/mogador';
import { Farmador } from './pages/farmador/farmador';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: 'mogador', component:Mogador },
    { path: 'farmador', component: Farmador },
    { path: '', component: Home },
];
