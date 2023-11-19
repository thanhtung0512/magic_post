package com.example.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.server.domain.CacheData;

@Repository
public interface CacheDataRepository extends CrudRepository<CacheData,String> {

}