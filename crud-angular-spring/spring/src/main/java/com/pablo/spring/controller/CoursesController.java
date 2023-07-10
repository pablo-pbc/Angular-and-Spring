package com.pablo.spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.pablo.spring.model.Course;
import com.pablo.spring.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CoursesController {
    
    private final CourseRepository courseRepository;

    // This method handles the HTTP GET request for retrieving a list of courses
    @GetMapping
    public List<Course> list() {
        // Calls the findAll() method of the CourseRepository to fetch all courses from the database
        return courseRepository.findAll();
    }

    // This method handles the HTTP POST to save a new course into database
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course create(@RequestBody Course course) {        
        return courseRepository.save(course);
    }

    // @PostMapping
    // public ResponseEntity<Course> create(@RequestBody Course course) {
    //     System.out.println(course.getName());
    //     System.out.println(course.getCategory());
    //     return ResponseEntity.status(HttpStatus.CREATED).
    //         body(courseRepository.save(course));
    // }

}
