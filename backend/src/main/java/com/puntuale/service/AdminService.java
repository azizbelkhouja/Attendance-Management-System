package com.puntuale.service;


import com.puntuale.dto.UserDTO;
import com.puntuale.entities.Project;
import com.puntuale.entities.User;
import com.puntuale.enums.UserRole;
import com.puntuale.repository.ProjectRepository;
import com.puntuale.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public UserDTO createUser(UserDTO dto) {
        boolean exists = userRepository.findByEmail(dto.getEmail()).isPresent();
        if (exists) {
            throw new EntityExistsException("User already exists");
        }
        Optional<Project> optionalProject = projectRepository.findById(dto.getProjectId());
        if (optionalProject.isPresent()) {
            User user = new User();
            user.setEmail(dto.getEmail());
            user.setPassword(dto.getPassword());
            user.setName(dto.getName());
            user.setUserRole(dto.getUserRole());
            user.setProject(optionalProject.get());
            return userRepository.save(user).getDto();
        }
        throw new EntityNotFoundException("Project not found");
    }

    public List<UserDTO> getAllManagers() {
        List<User> users = userRepository.findAllByUserRole(UserRole.MANAGER);
        return users.stream().map(User::getDto).collect(Collectors.toList());
    }

    public List<UserDTO> getAllEmployees() {
        List<User> users = userRepository.findAllByUserRole(UserRole.EMPLOYEE);
        return users.stream().map(User::getDto).collect(Collectors.toList());
    }
}















