package com.puntuale.entities;

import com.puntuale.dto.UserDTO;
import com.puntuale.enums.UserRole;
import jakarta.persistence.*;

@Entity
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole userRole;

    @ManyToOne
    private Project project;

    public UserDTO getDto() {

        UserDTO dto = new UserDTO();

        dto.setId(id);
        dto.setEmail(email);
        dto.setName(name);
        dto.setUserRole(userRole);

        if(project != null) {
            dto.setProjectId(project.getId());
            dto.setProjectName(project.getName());
        }

        return dto;
    }

    // Default constructor
    public User() {}

    // GETTERS
    public Long getId() {
        return id;
    }

    public Project getProject() {
        return project;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public UserRole getUserRole() {
        return userRole;
    }


    // SETTERS
    public void setId(Long id) {
        this.id = id;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }
}
