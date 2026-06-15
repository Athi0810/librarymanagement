package com.example.backend.service.impl;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponse;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.AuthService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        Optional<User> optionalUser =
                userRepository.findByUsername(request.getUsername());

        if (optionalUser.isPresent()) {

            User user = optionalUser.get();

            if (user.getPassword().equals(request.getPassword())) {

                return new LoginResponse(
                        true,
                        "Login Successful",
                        user.getUsername(),
                        user.getRole()
                );
            }
        }

        return new LoginResponse(
                false,
                "Invalid Username or Password",
                null,
                null
        );
    }
}