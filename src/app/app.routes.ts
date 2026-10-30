import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Work } from './pages/work/work';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
     { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'work', component: Work },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
