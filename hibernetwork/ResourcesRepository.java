package com.example.postgresdemo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.postgresdemo.model.Resourse;

@Repository
public interface ResourcesRepository extends JpaRepository<Resourse, Long> {

	List<Resourse> findByproductId(Long productId);
}