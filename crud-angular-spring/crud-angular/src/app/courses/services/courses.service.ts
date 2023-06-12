import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root' // This service is provided at the root level
})
export class CoursesService {

  private readonly API = 'assets/courses.json'; // URL of the JSON file containing course data

  constructor(private httpClient: HttpClient) {
    // Injecting the HttpClient dependency into the service
  }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API) // Making an HTTP GET request to fetch the course list
      .pipe(
        first(), // Taking only the first emitted value
        tap(courses => console.log(courses)) // Logging the courses to the console
      );
  }
}
