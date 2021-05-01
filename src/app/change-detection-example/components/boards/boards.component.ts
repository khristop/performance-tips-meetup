import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { Task, TaskService, TaskStatus } from "../../task.service";

export interface TaskBoard {
  title: string;
  statusFilter: TaskStatus;
}

@Component({
  selector: "app-boards",
  templateUrl: "./boards.component.html",
  styleUrls: ["./boards.component.scss"],
})
export class BoardsComponent {
  taskBoards: TaskBoard[] = [
    {
      title: "TODO",
      statusFilter: 'progress',
    },
    {
      title: "DONE",
      statusFilter: 'done'
    },
  ];
  
  constructor(public taskService: TaskService) {}

  drop(event: CdkDragDrop<Task>) {
    console.log(event);
  }

  filterTasks(tasks: Task[], status: TaskStatus) {
    return tasks.filter( task => task.status === status);
  }
}
