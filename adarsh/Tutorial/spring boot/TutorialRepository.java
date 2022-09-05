package com.example.postgresdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.postgresdemo.model.Tutorial;

@Repository
public interface TutorialRepository extends CrudRepository<Tutorial, Integer>{
	
//	@Query(value = " SELECT  t.* FROM  tutorials t join comments c  on t.id = c.tutorial_id "
//			+ "GROUP BY t.id HAVING COUNT(*) > 2", nativeQuery = true)
//	List<Tutorial> findAll();
//	
//	@Query(value = "SELECT * FROM tutorials t join comments c on t.id = c.tutorial_id join users u on u.id=c.user_id where u.id =1", nativeQuery = true)
//	List<Tutorial> findTutorialById();
}
