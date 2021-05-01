import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
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

  constructor(public taskService: TaskService) {
    console.log("%cBoards component created", "color:blue");
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  changeDetectionCalled() {
    console.info('Dashboard - Change Detection');
    return 'testing only'
  }
}
