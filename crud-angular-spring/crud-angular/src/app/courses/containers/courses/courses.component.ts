import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';

import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { ConfirmationDialogComponent } from 'src/app/shared/component/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]> | null = null; // Observable variable to store the course list

  constructor(
    private coursesService: CoursesService, // Injecting the CoursesService
    public dialog: MatDialog, // Injecting the MatDialog service for displaying the error dialog
    private router: Router, // Class to control the rounting on Angular
    private route: ActivatedRoute, // Class to get the current route/URL
    private snackbar: MatSnackBar // Snack to open a dialog
  ) { this.refresh(); }

  refresh() {
    // Fetching the course list and handling any errors
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Something went wrong while loading the course list!'); // Calling the onError function to display the error dialog
        return of([]); // Returning an empty array as a fallback value
      })
    );
  }

  // Function to display the error dialog
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg // Passing the error message as data to the error dialog component
    });
  }

  ngOnInit(): void { }

  // Function to navigate to the course form page and create a new course
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route }); // Append 'new' to the current URL
  }

  // Function to navigate to the course form page and edit the selected course
  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route }); // Append 'edit/id' to the current URL
  }

  // Function to call the delete function in the back-end
  onRemove(course: Course) {

    // Setting the message dialog that will be showed to the user
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Are certain about delete the course?',
    });

    // Checking after dialog closed if the answer was true or false
    dialogRef.afterClosed().subscribe((result: Boolean) => {
      // if true the course will be deleted
      if (result) {
        this.coursesService.remove(course._id).subscribe(
          () => {
            this.refresh(); // refresing the page after delete the course
            this.snackbar.open('Course was deleted', '', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Error while deleting the course')
        );
      };
    });
  }
}
