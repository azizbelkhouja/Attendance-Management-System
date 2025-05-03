package com.puntuale.entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "project") // optional but recommended
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String duration;

    @Temporal(TemporalType.DATE)
    @Column(name = "start_date")
    private Date startDate;

    // Constructors
    public Project() {}

    public Project(Long id, String name, String duration, Date startDate) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.startDate = startDate;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }
}
