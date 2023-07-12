import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
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
    name: [''],
    category: [''],
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

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Course successfully saved', '', { duration: 3000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Error to save the course', '', { duration: 3000 });
  }
}
