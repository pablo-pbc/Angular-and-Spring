import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './component/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    ConfirmationDialogComponent, // Declaring the ErrorDialogComponent within the SharedModule
  ],
  imports: [
    CommonModule, // Importing the CommonModule, which provides common Angular directives and pipes
    AppMaterialModule // Importing the AppMaterialModule, which likely contains Angular Material module imports
  ],
  exports: [
    ErrorDialogComponent, // Exporting the ErrorDialogComponent to make it available for other modules that import the SharedModule
    CategoryPipe, // Exporting the CategoryPipe to make it available for other modules that import the SharedModule
    ConfirmationDialogComponent // Exporting the ConfirmationDialogComponent to make it available for other modules that import the SharedModule
  ]
})
export class SharedModule { }
