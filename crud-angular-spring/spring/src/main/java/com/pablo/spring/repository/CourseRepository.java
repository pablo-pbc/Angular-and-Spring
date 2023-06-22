package com.pablo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pablo.spring.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}

/**
 * The CourseRepository interface extends the JpaRepository interface, which provides generic CRUD (Create, Read, Update, Delete) operations for the Course entity.
 * By extending JpaRepository<Course, Long>, the CourseRepository inherits methods such as save(), findById(), findAll(), and deleteById(), among others. 
 * These methods allow us to interact with the database and perform operations on the Course entity.
 */