import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})

export class CourseFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService, // Variable to store the service class
    private snackBar: MatSnackBar
    ) {
    this.form =  this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  // Function to call the add new course function in the service class
  onSubmit() {
    this.service.save(this.form.value).subscribe(
      result => console.log(result),
      error => this.onError());
  }

  onCancel() {}

  onError() {
    this.snackBar.open('Error to save the course', '', { duration: 3000 })
  }

  ngOnInit(): void {}

}