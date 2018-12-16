import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from '../todos/todos.component';
import { TodosDetailsComponent } from '../todos-details/todos-details.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';
import { TodosEditComponent } from '../todos-edit/todos-edit.component';
import { TodoNewComponent } from '../todo-new/todo-new.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos/new',
    component: TodoNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos/:id',
    component: TodosDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos/:id/edit',
    component: TodosEditComponent,
    canActivate: [AuthGuard]
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