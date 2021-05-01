import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  constructor() {
    console.log("%cTodo component created", "color:blue");
  }
  changeDetectionCalled() {
    console.info("%cTODO component - Change Detection", "color:green");
    return 'testing only'
  }
}
