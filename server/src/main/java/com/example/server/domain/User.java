package com.example.server.domain;

import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Data
@Table(name = "User", uniqueConstraints = {
        @UniqueConstraint(columnNames = "Username"),
        @UniqueConstraint(columnNames = "Email")
})
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID")
    private Long userId;

    @Column(name = "Username", nullable = false)
    @NotBlank
    private String username;

    @Column(name = "Password", nullable = false)
    @NotBlank
    private String password;

    @ManyToOne
    @JoinColumn(name = "roleId")
    private Role role;

    @Column(name = "Email", nullable = false)
    @NotBlank
    @Email
    private String email;

    public List<Role> getRoles() {
        List<Role> roles = new ArrayList<>();
        roles.add(role);
        return roles;
    }

    public void setRole(Set<Role> roles) {
        Role[] array = roles.toArray(new Role[0]);
        for (Role role : array) {
            System.out.println(role);
        }
        role = array[0];

    }

    public User(String username2, String email2, String encode) {
        username = username2;
        email = email2;
        password = encode;
    }
}