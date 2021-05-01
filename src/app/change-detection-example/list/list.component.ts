import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.searchTask('');
  }

  searchTask(searchHint: string) {
    this.taskService.search(searchHint).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  trackBy(index: number, task: Task): number {
    return task.id;
  }
}
