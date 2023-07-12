import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<Course> {

  constructor(private service: CoursesService) { }

  // This method resolves data for a route before the route is activated
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    // Check if the 'id' parameter is present in the route's params
    if (route.params && route.params['id']) {
      // If the 'id' parameter is present, call the 'loadById' method of the 'CoursesService' with the 'id' parameter
      return this.service.loadById(route.params['id']);
    }
    // If the 'id' parameter is not present, return an Observable containing a default empty course object
    return of({ _id: '', name: '', category: '' });
  }
}
