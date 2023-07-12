import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';
import { Observable, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root' // This service is provided at the root level
})
export class CoursesService {

  private readonly API = 'api/courses'; // URL of the JSON file containing course data

  constructor(private httpClient: HttpClient) {
    // Injecting the HttpClient dependency into the service
  }

  // Function to list all courses
  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API) // Making an HTTP GET request to fetch the course list
      .pipe(
        first(), // Taking only the first emitted value
        // tap(courses => console.log(courses)) // Logging the courses to the console
      );
  }

  // Function to save the methods create and update and delete
  save(record: Partial<Course>) {
    console.log(record)
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  // Private function to handle the method to create a new course
  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record)
    .pipe(
      first()
    );
  }

  // Private function to handle the method to update a course
  private update(record: Partial<Course>) {
    return this.httpClient.put<Course>(`${this.API}/edit/${record._id}`, record)
    .pipe(
      first()
    );
  }

  // Function to return the URL from the selected course
  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }
}
