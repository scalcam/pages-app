import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { FirebaseTestingComponent } from './components/firebase-testing/firebase-testing.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'test', pathMatch: 'full', component: TestComponent },
  { path: 'firebase', pathMatch: 'full', component: FirebaseTestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
