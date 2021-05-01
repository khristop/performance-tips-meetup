import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionExampleRoutingModule { }
