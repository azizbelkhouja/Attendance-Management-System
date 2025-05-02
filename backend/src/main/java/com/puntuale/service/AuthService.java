package com.puntuale.service;

import com.puntuale.entities.User;
import com.puntuale.enums.UserRole;
import com.puntuale.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    private void createAdminUser() {

        User optionalUser = userRepository.findByUserRole(UserRole.ADMIN);

        if (optionalUser == null) {

            User user = new User();

            user.setName("Admin");
            user.setEmail("admin@admin.com");
            user.setUserRole(UserRole.ADMIN);
            user.setPassword("admin");

            userRepository.save(user);
            System.out.println("Admin user created");
        } else {
            System.out.println("Admin user Already exists");
        }
    }
}
