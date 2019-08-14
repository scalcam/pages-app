import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { PersonListComponent } from './components/person-list/person-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'test', pathMatch: 'full', component: TestComponent },
  { path: 'people', pathMatch: 'full', component: PeopleComponent },
  { path: 'add-person', pathMatch: 'full', component: AddPersonComponent },
  { path: 'edit-person/:id', pathMatch: 'full', component: EditPersonComponent },
  { path: 'person-list', pathMatch: 'full', component: PersonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
