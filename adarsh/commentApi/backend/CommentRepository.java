package com.example.postgresdemo.controller;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.postgresdemo.model.Comment;

public interface CommentRepository extends CrudRepository<Comment, Integer>{
	
	@Query(value = "SELECT * FROM comments c where c.tutorial_id =?1", nativeQuery = true)
	List<Comment> findAllCommentsBasedOnTutorialId(Integer tutorialId);

}
