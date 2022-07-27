package com.example.postgresdemo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.postgresdemo.model.Company;

@Repository
public interface CompanyRepository extends CrudRepository<Company, Long> {

}