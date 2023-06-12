import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>; // Observable variable to store the course list
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private coursesService: CoursesService, // Injecting the CoursesService
    public dialog: MatDialog // Injecting the MatDialog service for displaying the error dialog
  ) {
    // Fetching the course list and handling any errors
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Something went wrong while loading the course list!'); // Calling the onError function to display the error dialog
        return of([]); // Returning an empty array as a fallback value
      })
    );
  }

  // Function to display the error dialog
  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage // Passing the error message as data to the error dialog component
    });
  }

  ngOnInit(): void { }
}
