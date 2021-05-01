import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  addressForm = this.fb.group({
    title: [null, Validators.required],
    description: null,
    priority: ['normal', Validators.required],
    status: ['progress'],
  });

  constructor(private fb: FormBuilder, private tasksService: TaskService) {
    console.log("%cForm component created", "color:blue");
  }

  onSubmit() {
    this.tasksService.add(this.addressForm.value)
  }

  changeDetectionCalled() {
    console.log('Form module - Change Detection');
    return 'testing only'
  }
}
