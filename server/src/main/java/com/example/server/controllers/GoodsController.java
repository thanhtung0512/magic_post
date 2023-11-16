package com.example.server.controllers;

import com.example.server.domain.Goods;
import com.example.server.repositories.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/goods")
public class GoodsController {
    @Autowired
    private GoodsRepository goodsRepository;

    @GetMapping
    public List<Goods> getAllGoods() {
        return goodsRepository.findAll();
    }
}
