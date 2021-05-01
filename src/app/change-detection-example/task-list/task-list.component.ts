import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  @Input() title: string;
  items: Task[];
  @Input('items') 
  set itemsSeeter(items: Task[]) {
    console.log('TaskListComponent - items updated')
    this.items = items;
  };
  @Output() dropItem = new EventEmitter<CdkDragDrop<Task[]>>();

  constructor() {
    console.log("%cTaskList component created", "color:blue");
  }

  changeDetectionCalled() {
    console.info("%cTaskList component - Change Detection", "color:green");
    return 'testing only'
  }
}
