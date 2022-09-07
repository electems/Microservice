package com.example.postgresdemo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@Table(name = "comments")
@CrossOrigin
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String commentDescription;
	
	@Column(name = "creatDate", nullable = false, updatable = false)
	@CreationTimestamp
	private Date creatDate;
	
	private Integer tutorial_id;

	public Comment() {
	}

	

	/**
	 * @param id
	 * @param commentDescription
	 * @param creatDate
	 * @param tutorial_id
	 */
	public Comment(int id, String commentDescription, Date creatDate, Integer tutorial_id) {
		super();
		this.id = id;
		this.commentDescription = commentDescription;
		this.creatDate = creatDate;
		this.tutorial_id = tutorial_id;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCommentDescription() {
		return commentDescription;
	}

	public void setCommentDescription(String commentDescription) {
		this.commentDescription = commentDescription;
	}

	public Date getCreatDate() {
		return creatDate;
	}

	public void setCreatDate(Date creatDate) {
		this.creatDate = creatDate;
	}



	/**
	 * @return the tutorial_id
	 */
	public Integer getTutorial_id() {
		return tutorial_id;
	}



	/**
	 * @param tutorial_id the tutorial_id to set
	 */
	public void setTutorial_id(Integer tutorial_id) {
		this.tutorial_id = tutorial_id;
	}

}
