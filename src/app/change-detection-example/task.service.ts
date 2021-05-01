import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, take } from "rxjs/operators";

export type Priority = "low" | "normal" | "high";
export type TaskStatus = "progress" | "done";

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
}

export interface Board {
  title: string;
  tasks: Task[];
}

@Injectable()
export class TaskService {
  boards: Board[] = [
    {
      title: "TODO",
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description:
            "Elit magna duis excepteur aliqua exercitation et cillum voluptate sint ex eu magna dolor qui.",
          priority: "high",
          status: "progress",
        },
        {
          id: 2,
          title: "Task 2",
          description:
            "Reprehenderit dolore non tempor sunt aute minim eu fugiat occaecat quis esse.",
          priority: "low",
          status: "progress",
        },
        {
          id: 3,
          title: "Task 3",
          description:
            "Proident dolore reprehenderit cillum nulla aute deserunt pariatur deserunt sit exercitation in esse.",
          priority: "high",
          status: "progress",
        },
        {
          id: 4,
          title: "Task 4",
          description:
            "Aliqua labore consequat reprehenderit Lorem id esse laborum do eiusmod enim ad aliqua elit.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 5,
          title: "Task 5",
          description: "Eu nulla aliqua dolore irure sit consectetur.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 6,
          title: "Task 6",
          description:
            "Velit eiusmod laboris officia consequat enim non anim reprehenderit cupidatat nostrud irure magna labore.",
          priority: "low",
          status: "progress",
        },
        {
          id: 7,
          title: "Task 7",
          description: "Incididunt officia ad proident do cupidatat veniam.",
          priority: "low",
          status: "progress",
        },
        {
          id: 8,
          title: "Task 8",
          description:
            "Ea velit est deserunt duis eiusmod qui qui veniam ut sunt.",
          priority: "high",
          status: "progress",
        },
      ],
    },
    {
      title: "DONE",
      tasks: [],
    },
  ];

  add(newTask: Task) {
    const newBoards = [...this.boards];
    const { tasks } = newBoards[0];
    newTask.id = tasks[tasks.length].id + 1;
    tasks.push(newTask);
    this.boards = newBoards;
  }

  search(searchHint: string): Observable<Task[]> {
    const tasks = this.getAllTasks(this.boards);
    const newtasks: Task[] = tasks?.length > 0 ? JSON.parse(JSON.stringify(tasks)) : [];
    return of(newtasks.filter(task => task.description.includes(searchHint))).pipe(
      take(1)
    );
  }

  getAllTasks(boards: Board[]) {
    return boards.reduce(
      (acc, board) => ([...acc, ...board.tasks]),
      []
    );
  }
}
