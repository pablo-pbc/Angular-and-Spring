import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category' // Specifies the name of the pipe to be used in templates
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    // The transform method is required to implement the PipeTransform interface
    switch (value) {
      case 'front-end': return 'code'; // Maps 'front-end' to 'code'
      case 'back-end': return 'computer'; // Maps 'back-end' to 'computer'
    }
    return 'code'; // Default transformation, used if the input doesn't match any cases
  }

}
