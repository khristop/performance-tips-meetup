import { Injectable } from "@angular/core";

export type Priority = "low" | "normal" | "high";
export type TaskStatus = "progress" | "done";

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
}

@Injectable()
export class TaskService {
  boards = [
    {
      title: "TODO",
      tasks: [
        {
          id: 0,
          title: "Task 1",
          description:
            "Elit magna duis excepteur aliqua exercitation et cillum voluptate sint ex eu magna dolor qui.",
          priority: "high",
          status: "progress",
        },
        {
          id: 1,
          title: "Task 2",
          description:
            "Reprehenderit dolore non tempor sunt aute minim eu fugiat occaecat quis esse.",
          priority: "low",
          status: "progress",
        },
        {
          id: 2,
          title: "Task 3",
          description:
            "Proident dolore reprehenderit cillum nulla aute deserunt pariatur deserunt sit exercitation in esse.",
          priority: "high",
          status: "progress",
        },
        {
          id: 3,
          title: "Task 4",
          description:
            "Aliqua labore consequat reprehenderit Lorem id esse laborum do eiusmod enim ad aliqua elit.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 4,
          title: "Task 5",
          description: "Eu nulla aliqua dolore irure sit consectetur.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 5,
          title: "Task 6",
          description:
            "Velit eiusmod laboris officia consequat enim non anim reprehenderit cupidatat nostrud irure magna labore.",
          priority: "low",
          status: "progress",
        },
        {
          id: 6,
          title: "Task 7",
          description: "Incididunt officia ad proident do cupidatat veniam.",
          priority: "low",
          status: "progress",
        },
        {
          id: 7,
          title: "Task 8",
          description:
            "Ea velit est deserunt duis eiusmod qui qui veniam ut sunt.",
          priority: "high",
          status: "progress",
        },
        {
          id: 8,
          title: "Task 9",
          description:
            "Adipisicing sit mollit nisi sunt eu incididunt sit officia ut mollit sunt occaecat veniam voluptate.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 9,
          title: "Task 10",
          description:
            "Incididunt ad ipsum reprehenderit sunt cupidatat exercitation cillum.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 10,
          title: "Task 11",
          description: "Lorem veniam anim nulla in.",
          priority: "high",
          status: "progress",
        },
        {
          id: 11,
          title: "Task 12",
          description: "Aute id enim ea proident anim velit elit.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 12,
          title: "Task 13",
          description: "Elit voluptate labore sunt ex.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 13,
          title: "Task 14",
          description: "Sit adipisicing eu anim labore qui aliqua.",
          priority: "normal",
          status: "progress",
        },
        {
          id: 14,
          title: "Task 15",
          description:
            "Id mollit ut Lorem veniam commodo ea eiusmod dolore ullamco minim et.",
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
    this.boards[0].tasks.push(newTask);
  }
}
