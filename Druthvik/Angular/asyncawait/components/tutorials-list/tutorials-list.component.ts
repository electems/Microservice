import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit {
  tutorials?: any;
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';
  // page = 1;
  // count = 0;
  // pageSize = 3;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
    this.title = 'hi';
    this.tutorials = [
      { title: 'some1', description: 'dd' },
      { title: 'some2', description: 'dd' },
      { title: 'some3', description: 'dd' },
      { title: 'some4', description: 'dd' },
      { title: 'some5', description: 'dd' },
      { title: 'some6', description: 'dd' },
    ];
  }

  // handlePageChange(event: any): void {
  //   this.page = event;
  //   this.retrieveTutorials();
  // }

  // handlePageSizeChange(event: { target: { value: number } }): void {
  //   this.pageSize = event.target.value;
  //   this.page = 1;
  //   this.retrieveTutorials();
  // }

  // retrieveTutorials(): void {
  //   this.tutorialService.getAll().subscribe(
  //     (data) => {
  //       this.tutorials = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  async retrieveTutorials() {
    this.tutorials = await this.tutorialService.getAll();
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchTitle(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title).subscribe(
      (data) => {
        this.tutorials = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
