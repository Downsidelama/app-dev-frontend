import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from '../todos/todos.component';
import { TodosNewComponent } from '../todos-new/todos-new.component';
import { TodosDetailsComponent } from '../todos-details/todos-details.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'todos/new',
    component: TodosNewComponent
  },
  {
    path: 'todos/:id',
    component: TodosDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }