package com.example.postgresdemo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Before;
import org.junit.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import com.example.postgresdemo.model.Comment;
import com.example.postgresdemo.repository.CommentRepository;

@SpringBootTest
public class CommentControllerTest {

	
	
	@Before
    public void init()  {
        MockitoAnnotations.openMocks(this);
    }
	
	@MockBean
	CommentRepository commentRepository;
	
	@Test
	public void addComment() {
		Comment comment = new Comment("comment1", 1);
		when(commentRepository.save(comment)).thenReturn(comment);
		assertEquals(comment, commentRepository.save(comment));
	}
	
	@Test
	public void getCommentByTutorialId(){
		int id=1;
		when(commentRepository.findByTutorialId(id))
		.thenReturn(Stream.of(new Comment("comment1", id),new Comment("comment2", id)).collect(Collectors.toList()));
          assertEquals(2, ((List<Comment>) commentRepository.findByTutorialId(id)).size());
	}
}
