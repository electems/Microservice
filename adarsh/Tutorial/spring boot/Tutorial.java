package com.example.postgresdemo.model;

import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@Table(name = "tutorials")
@CrossOrigin
public class Tutorial {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@NotBlank
	private String title;

	private String description;

	private String timeZone;

	@Column(name = "ddate", nullable = false, updatable = false)
	@CreationTimestamp
	private Date creatDate;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "tutorials_categories", joinColumns = {
			@JoinColumn(name = "tutorials_id") }, inverseJoinColumns = { @JoinColumn(name = "categories_id") })
	private List<Category> categories;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "tutorial_id")
	private List<Comment> comments;

	public Tutorial() {
	}

	public Tutorial(int id, String title, String description, String timeZone, Date creatDate,
			List<Category> categories, List<Comment> comments) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.timeZone = timeZone;
		this.creatDate = creatDate;
		this.categories = categories;
		this.comments = comments;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTimeZone() {
		return timeZone;
	}

	public void setTimeZone(String timeZone) {
		this.timeZone = timeZone;
	}

	public Date getCreatDate() {
		return creatDate;
	}

	public void setCreatDate(Date creatDate) {
		this.creatDate = creatDate;
	}

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

}
