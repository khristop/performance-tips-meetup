import { Injectable } from '@angular/core';

export type Priority = 'low' | 'normal' | 'high';
export type TaskStatus = 'progress' | 'done';

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
      tasks: []
    },
    {
      title: "DONE",
      tasks: []
    },
  ];

  add(newTask: Task) {
    this.boards[0].tasks.push(newTask);
  }
}