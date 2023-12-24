package com.example.server.controllers;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.request.UpdateUserRequest;
import com.example.server.services.UserService;

@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PutMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody UpdateUserRequest request) {

        System.out.println("currentUserName: " + request.getCurrentUsername() + "\n newUserName: " + request.getNewUsername() + "\nnewPassword:"
                + request.getNewPassword() + "\nnewEmail: " + request.getNewEmail() + "\nPhoneNumber:" + request.getPhoneNumber() + "\npointId: " + request.getPointID());
        // userService.updateUser(currentUsername, newUsername, newPassword, newEmail);
        return ResponseEntity.ok("Updated successfully");

    }
}
