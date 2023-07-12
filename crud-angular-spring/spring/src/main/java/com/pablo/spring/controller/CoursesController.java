package com.pablo.spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    // This method handles the HTTP GET request for finding a course by ID
    @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable Long id){
        return courseRepository.findById(id)
            .map(resultFound -> ResponseEntity.ok().body(resultFound))
            .orElse(ResponseEntity.notFound().build());
    }

    // This method handles the HTTP POST to save a new course into database
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course create(@RequestBody Course course) {        
        return courseRepository.save(course);
    }

    // This method handles the HTTP POST to update a course into database
    @PutMapping("/edit/{id}")
    public ResponseEntity<Course> update(@PathVariable("id") Long courseId, @RequestBody Course courseUpdate) {
        return courseRepository.findById(courseId)
            .map(resultFound -> {
                resultFound.setName(courseUpdate.getName());
                resultFound.setCategory(courseUpdate.getCategory());
                Course updated = courseRepository.save(resultFound);
                return ResponseEntity.ok().body(updated);
            })
            .orElse(ResponseEntity.notFound().build());
    }

}
