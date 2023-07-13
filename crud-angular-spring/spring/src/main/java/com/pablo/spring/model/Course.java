package com.pablo.spring.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity
@SQLDelete(sql = "UPDATE Course SET status = 'Disable' WHERE id = ?")
@Where(clause = "status = 'Enable'")
public class Course {

    // The @Id annotation indicates that the 'id' field is the primary key of the entity
    @Id
    // The @GeneratedValue annotation specifies the strategy for generating the ID values
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    // The @Column annotation is used to specify the mapping of the 'name' field to a database column
    // The 'length' attribute specifies the maximum length of the column
    // The 'nullable' attribute indicates whether the column can be assigned a null value
    @NotNull
    @NotBlank
    @Length(min = 5, max = 30)
    @Column(length = 30, nullable = false)
    private String name;

    // Similar to the 'name' field, the 'category' field is also mapped to a database column
    @NotNull
    @Length(max = 10)
    @Pattern(regexp = "Back-end|Front-end")
    @Column(length = 10, nullable = false)
    private String category;

    @NotNull
    @Length(max = 10)
    @Pattern(regexp = "Enable|Disable")
    @Column(length = 10, nullable = false)
    private String status = "Enable";
    
}
