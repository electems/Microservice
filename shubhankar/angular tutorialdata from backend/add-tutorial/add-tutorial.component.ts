import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Category } from 'src/app/models/category'
import { Tutorial } from 'src/app/models/tutorial.model'
import { TutorialService } from 'src/app/services/tutorial.service'
@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  submitted: boolean = false
  country: any
  
  tutorial: Tutorial = {
    title: '',
    description: '',
    categories: [],
    published: false,
  }
  categories?: Category[];
  selectedCategory = new Category()
  
  selectedCategories: Category[] = [];
  Categoey?: Category[]
  
constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.tutorials = this.getCategoryData();
    this.retriveCategory();
   // this.getCategorieslocal();
    // this.retriveCategorylocal(this.route.snapshot.params.id);
    //console.log("mt local storage", localStorage.getItem('myData'));

  }

  //   getCategorieslocal() {
  //   return this.tutorialService.getCategoriesHard();
  // }

  async  retriveCategorylocal(id: number){
   
    this.Categoey =  JSON.parse(localStorage.getItem('GetCategory') || '{}');
    this.selectedCategory = this.Categoey?.find((y) => y.id == id)!;
}
 
//my code
async retriveCategory(): Promise<void> {
   this.categories = await this.tutorialService.getAllCategory();
   localStorage.setItem('GetCategory', JSON.stringify(this.categories))
    console.log( localStorage.getItem('GetCategory'));
   
}
onSelected(value: Category) {
  this.selectedCategories.push(value);
}

async saveTutorial() {
  if (this.tutorial.title != '') {
  const tutorial: Tutorial = {
    title: this.tutorial.title,
    
    description: this.tutorial.description,
    published: (this.tutorial.published = false),
  };
  tutorial.categories = this.selectedCategories;
  await this.tutorialService.createTutorial(tutorial);
  this.router.navigate(['/tutorials']);
  console.log(tutorial);
}else {
  this.submitted = true;
}
}
 newTutorial(): void {
    this.submitted = false
    this.tutorial = {
      title: '',
      description: '',
      published: false,
    }
  }
}
