package com.example.postgresdemo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.postgresdemo.model.Employee;

@Repository
public interface EmplouyeeRepository extends CrudRepository<Employee, Long> {

}
