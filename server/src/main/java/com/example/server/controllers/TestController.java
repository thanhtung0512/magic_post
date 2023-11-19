package com.example.server.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('BOSS') or hasRole('POINTLEADER') or hasRole('TELLER')  or hasRole('STAFF')  or hasRole('CUSTOMER')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/boss")
    @PreAuthorize("hasRole('BOSS')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/POINTLEADER")
    @PreAuthorize("hasRole('POINTLEADER')")
    public String adminAccess() {
        return "Admin Board.";
    }
}