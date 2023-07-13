import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})

export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    name: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)]],
    category: ['', [
      Validators.required
    ]],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService, // Variable to store the service class
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      id: course._id,
      name: course.name,
      category: course.category
    });
  }

  // Function to call the add new course function in the service class
  onSubmit() {
    this.service.save(this.form.value).subscribe(
      result => this.onSuccess(),
      error => this.onError()
    );
  }

  // Function to navigate to the previous page
  onCancel() {
    this.location.back();
  }

  // Function to open the success dialog for the user and back to the previous page
  private onSuccess() {
    this.snackBar.open('Course successfully saved', '', { duration: 3000 });
    this.location.back();
  }

  // Function to open the error dialog for the user
  private onError() {
    this.snackBar.open('Error to save the course', '', { duration: 3000 });
  }

  // Function to display the error message
  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'You must enter a value'
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `You must enter at least ${requiredLength} characters`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 30;
      return `You must enter at least ${requiredLength} characters`;
    }

    return 'Error'
  }
}
