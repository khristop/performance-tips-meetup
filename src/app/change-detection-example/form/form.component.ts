import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  addressForm = this.fb.group({
    title: [null, Validators.required],
    description: null,
    priority: ['normal', Validators.required],
    status: ['progress'],
  });

  previewTask: Partial<Task> = {
    title: '',
    description: '',
    priority: 'normal',
    status: 'progress'
  };

  constructor(private fb: FormBuilder, private tasksService: TaskService) {
    console.log("%cForm component created", "color:blue");
  }

  ngOnInit() {
    this.addressForm.valueChanges.subscribe(({title, description, priority, status}) => {
      this.previewTask.title = title;
      this.previewTask.description = description;
      this.previewTask.priority = priority;
      this.previewTask.status = status;
    });
  }

  onSubmit() {
    this.tasksService.add(this.addressForm.value)
  }

  changeDetectionCalled() {
    console.info("%cForm component - Change Detection", "color:green");
    return true;
  }
}
