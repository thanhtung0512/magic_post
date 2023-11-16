package com.example.server.repositories;

import com.example.server.domain.Goods;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository(value = "goodsRepository")
public interface GoodsRepository extends JpaRepository<Goods, Long> {
    
}
