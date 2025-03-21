package com.example.demo.arc;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
		
	

	Optional<User> findByEmail(String email);
}
