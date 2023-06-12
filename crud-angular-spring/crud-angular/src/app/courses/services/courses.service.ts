import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root' //Make this service enable for all project
})
export class CoursesService {

  //Requesting the instance of the HttpClient class -> Injectable dependency
  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Front-End'}
    ];
  }
}
