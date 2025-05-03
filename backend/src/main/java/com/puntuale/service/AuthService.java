package com.puntuale.service;

import com.puntuale.dto.UserDTO;
import com.puntuale.entities.User;
import com.puntuale.enums.UserRole;
import com.puntuale.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public UserDTO login(UserDTO user) {

        Optional<User> dbUser = userRepository.findByEmail(user.getEmail());

        if (dbUser.isPresent() && user.getPassword().equals(dbUser.get().getPassword())) {
            return dbUser.get().getDto();
        }
        return null;
    }
}
