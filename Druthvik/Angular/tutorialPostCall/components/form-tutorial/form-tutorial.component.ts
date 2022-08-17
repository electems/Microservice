import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-form-tutorial',
  templateUrl: './form-tutorial.component.html',
  styleUrls: ['./form-tutorial.component.css'],
})
export class FormTutorialComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  tutorials?: Tutorial;
  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
  };

  tutorialData: Tutorial = {
    title: '',
    description: '',
    published: false,
    categories: [],
  };

  categories?: Category[];
  selectedCategory = new Category();
  selectedCategories: Category[] = [];
  route: any;
  selectedTutorial = new Tutorial();

  constructor(
    private tutorialService: TutorialService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.retriveCategory();
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: [null, Validators.required],
    });
  }
  get f() {
    return this.form.controls;
  }
  async retriveCategory(): Promise<void> {
    this.categories = await this.tutorialService.getAllCategory();
  }
  async retriveCategoryById(id: number): Promise<void> {
    this.categories = await this.tutorialService.getCategoryById(id);
  }
  onSelected(value: Category) {
    this.selectedCategories.push(value);
  }

  async saveTutorial() {
    const tutorialData: Tutorial = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      published: (this.tutorial.published = false),
    };
    tutorialData.categories = this.selectedCategories;
    await this.tutorialService.createTutorial(tutorialData);
    this.router.navigate(['/tutorials']);
    console.log(tutorialData);
  }
}
