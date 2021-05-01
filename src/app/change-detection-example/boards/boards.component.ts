import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Board, Task, TaskService } from "../task.service";

@Component({
  selector: "app-boards",
  templateUrl: "./boards.component.html",
  styleUrls: ["./boards.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardsComponent {

  get tasksCount() {
    console.log('TasksCount getter called');
    return this.countTasks(this.taskService.boards);
  }

  constructor(public taskService: TaskService) {
    console.log("%cBoards component created", "color:blue");
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  changeDetectionCalled() {
    console.info("%cBoards - Change Detection", "color:green");
    return "testing only";
  }

  getTaskCount() {
    console.log('getTasksCount called');
    return this.countTasks(this.taskService.boards);
  }

  countTasks(boards: Board[]) {
    return boards.reduce(
      (acc, board) => board.tasks.length + acc,
      0
    );
  }
}
