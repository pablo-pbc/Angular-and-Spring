package com.pablo.spring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

}
