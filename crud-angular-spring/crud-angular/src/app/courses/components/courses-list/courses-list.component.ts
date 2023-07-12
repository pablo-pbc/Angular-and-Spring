import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor() {}

  // Function to navigate to the course form page
  onAdd() {
    this.add.emit(true);
  }

  // Function to edit the course select
  onEdit(course: Course) {
    this.edit.emit(course);
  }

  // Function to delete the course select
  onDelete(course: Course) {
    this.remove.emit(course);
  }

  ngOnInit(): void {}
}
