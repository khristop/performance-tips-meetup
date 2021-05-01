import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor() {
    console.log("%cTodo component created", "color:blue");
  }
  changeDetectionCalled() {
    console.log('Form module - Change Detection');
    return 'testing only'
  }
}
