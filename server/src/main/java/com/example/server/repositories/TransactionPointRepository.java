
package com.example.server.repositories;

import com.example.server.domain.TransactionPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionPointRepository extends JpaRepository<TransactionPoint, Long> {
    // Add custom queries if needed
}
