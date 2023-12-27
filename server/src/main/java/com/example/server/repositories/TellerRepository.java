package com.example.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.domain.Teller;

public interface TellerRepository extends JpaRepository<Teller,Long> {
    
}
