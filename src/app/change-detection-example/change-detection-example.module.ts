import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionExampleRoutingModule } from './change-detection-example-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoComponent } from './components/todo/todo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { FormComponent } from './components/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CallbackPipe } from './callback.pipe';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({
  declarations: [TodoComponent, FormComponent, CallbackPipe, TaskListComponent, TasksComponent],
  imports: [
    CommonModule,
    ChangeDetectionExampleRoutingModule,
    DragDropModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ChangeDetectionExampleModule { }
