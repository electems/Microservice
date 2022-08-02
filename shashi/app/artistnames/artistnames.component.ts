import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artistnames',
  templateUrl: './artistnames.component.html',
  styleUrls: ['./artistnames.component.css'],
})
export class ArtistnamesComponent implements OnInit {
  public artists:any = []
constructor(private list: DataService) { }
ngOnInit(): void {
    this.artists = this.list.getList();
  }
}
