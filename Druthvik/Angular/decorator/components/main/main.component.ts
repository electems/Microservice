import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public childTitle: string = "child title";

  public clickCount: number = 0;

  public name: string = "child name";

  onCountChanged(count: number): void {
    this.clickCount = count;
  }
}
