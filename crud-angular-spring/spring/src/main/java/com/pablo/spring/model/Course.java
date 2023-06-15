package com.pablo.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Course {

    // The @Id annotation indicates that the 'id' field is the primary key of the entity
    @Id
    // The @GeneratedValue annotation specifies the strategy for generating the ID values
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // The @Column annotation is used to specify the mapping of the 'name' field to a database column
    // The 'length' attribute specifies the maximum length of the column
    // The 'nullable' attribute indicates whether the column can be assigned a null value
    @Column(length = 200, nullable = false)
    private String name;

    // Similar to the 'name' field, the 'category' field is also mapped to a database column
    @Column(length = 10, nullable = false)
    private String category;
    
}
