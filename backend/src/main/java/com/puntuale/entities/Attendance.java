package com.puntuale.entities;

import com.puntuale.enums.AttendanceStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private AttendanceStatus attendanceStatus;

    @ManyToOne
    private Project project;

    @ManyToOne
    private User employee;

    @ManyToOne
    private User manager;
}
