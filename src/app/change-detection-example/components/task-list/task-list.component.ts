import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() title: string;
  @Input() items: Task[];
  @Output() dropItem = new EventEmitter<CdkDragDrop<Task[]>>();

  constructor() {
    console.log("%cTaskList component created", "color:blue");
  }

  changeDetectionCalled() {
    console.log('Form module - Change Detection');
    return 'testing only'
  }
}
