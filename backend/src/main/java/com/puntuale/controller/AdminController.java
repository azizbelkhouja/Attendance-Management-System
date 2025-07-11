package com.puntuale.controller;


import com.puntuale.dto.UserDTO;
import com.puntuale.service.AdminService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/create-user")
    public ResponseEntity<?> signupUser(@RequestBody UserDTO dto) {

        try {
            UserDTO createdUser = adminService.createUser(dto);
            return new ResponseEntity<>(createdUser, HttpStatus.OK);
        } catch (EntityExistsException | EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/managers")
    public ResponseEntity<?> getAllManagers() {
        try {
            return ResponseEntity.ok(adminService.getAllManagers());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
