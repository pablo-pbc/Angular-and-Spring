import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent, // Declaring the CoursesComponent within the CoursesModule
  ],
  imports: [
    CommonModule, // Importing the CommonModule, which provides common Angular directives and pipes
    CoursesRoutingModule, // Importing the CoursesRoutingModule, which likely contains routing configurations for the CoursesModule
    AppMaterialModule, // Importing the AppMaterialModule, which likely contains Angular Material module imports
    SharedModule, // Importing the SharedModule, which provides shared components, directives, and pipes
    ReactiveFormsModule // Importing the ReactiveFormsModulo, which provides methods to create form
  ],
})
export class CoursesModule {}

/**
 * The CoursesModule is a module specifically for the Courses feature.
 * The declarations array includes the CoursesComponent, which is declared within the CoursesModule and can be used within this module.
 * The imports array includes the CommonModule, which provides common directives and pipes, the CoursesRoutingModule, which likely contains routing configurations specific to the Courses feature, the AppMaterialModule, which likely contains Angular Material module imports for UI components, and the SharedModule, which provides shared components, directives, and pipes.
 * By organizing the module this way, it ensures that the necessary dependencies are imported and declared for the Courses feature to function properly and also promotes code organization and modularity.
 * This approach allows for easier management and separation of concerns within the application, making it more maintainable and scalable.
 */
