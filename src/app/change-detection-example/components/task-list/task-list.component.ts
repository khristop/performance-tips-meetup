import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() title: string;
  @Input() items: Task[];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Task>) {
    console.log(event);
  }
}
