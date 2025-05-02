package com.puntuale.repository;

import com.puntuale.entities.User;
import com.puntuale.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUserRole(UserRole role);
}
