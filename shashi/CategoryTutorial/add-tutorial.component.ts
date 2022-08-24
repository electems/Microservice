import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/categoryTask.model';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var NgForm: any;
@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  isSubmitted = false;
  registerForm!: FormGroup;
  tutorial: Tutorial = {
    title: '',
    description: '',
    categories: [],
    author: '',
  };
  country: any;

  tutorialData: Tutorial = {
    title: '',
    description: '',
    categories: [],
  };
  tutorials: Tutorial = {
    title: '',
    description: '',
    categories: [],
  };
  submitted = false;
  categories!: Category[];
  public selectedCategory = new Category();
  selectedCategories: Category[] = [];

  constructor(
    private tutorialService: TutorialService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.retrieveCategoryTask();
    if (this.route.snapshot.params.id != 'add') {
      this.getTutorial(this.route.snapshot.params.id);
    }
    this.country = this.getCountry();
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      categories: ['', Validators.required],
      author: ['', Validators.required],
      country: ['', Validators.required],
    });
  }
  get fval() {
    return this.registerForm.controls;
  }
  onSubmit() {
    alert(
      'Form Submitted succesfully!!!\n Check the values in browser console.'
    );
  }
  getCountry() {
    return this.tutorialService.getCountryFromData();
  }

  // registrationForm = this.fb.group({
  //   cityName: ['', [Validators.required]]
  // })

  // changeCity(e: { value: any; target: { value: any; }; }) {
  //   console.log(e.value)
  //   this.cityName.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }

  // get cityName() {
  //   return this.registrationForm.get('cityName');
  // }

  //dropdown
  async getTutorial(id: Number) {
    const data = await this.tutorialService.getTutorial(id);
    this.tutorial = data;
    if (data.categories) {
      this.selectedCategory = data.categories[0];
      console.log();
    }
  }
  //UPDATE
  async updateTutorial(): Promise<void> {
    const tutorialData: Tutorial = {
      id: this.tutorial.id,
      title: this.tutorial.title,
      description: this.tutorial.description,
      categories: this.tutorial.categories,
    };
    tutorialData.categories = this.selectedCategories;
    await this.tutorialService.updateTutorial(tutorialData);
    this.router.navigate(['/tutorials']);
    console.log(tutorialData);
  }

  async retrieveCategoryTask(): Promise<void> {
    this.categories = await this.tutorialService.getAllCategory();
  }

  onSelected(value: Category) {
    if (this.categories) {
      for (let category of this.categories) {
        if (category.id == value.id) {
          this.selectedCategories.push(category);
        }
      }
    }
  }
  async saveTutorial() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.saveTutorialDetails();
    }
  }

  //SAVE OR SUBMIT TUTORIAL
  async saveTutorialDetails() {
    const tutorialData: Tutorial = {
      title: this.tutorial.title,
      description: this.tutorial.description,
    };
    tutorialData.categories = this.selectedCategories;
    await this.tutorialService.createTutorial(tutorialData);
    this.router.navigate(['/tutorials']);
    console.log(tutorialData);
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
    };
  }
}
