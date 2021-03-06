import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailsComponent {

  @Input() item: Task;

  constructor() {
    console.log("%cItemDetails component created", "color:blue");
  }
}
