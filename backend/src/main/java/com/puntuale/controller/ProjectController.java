package com.puntuale.controller;

import com.puntuale.dto.ProjectDTO;
import com.puntuale.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("/add")
    public ResponseEntity<?> addProject(@RequestBody ProjectDTO dto) {
        try {
            return ResponseEntity.ok(projectService.addProject(dto));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProjects() {
        try {
            return ResponseEntity.ok(projectService.getAllProjects());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
