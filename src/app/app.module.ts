import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { TodosComponent } from './todos/todos.component';
import { TodosNewComponent } from './todos-new/todos-new.component';
import { TodosEditComponent } from './todos-edit/todos-edit.component';
import { TodosDetailsComponent } from './todos-details/todos-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosNewComponent,
    TodosEditComponent,
    TodosDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
