import { Component, OnInit } from '@angular/core';
import { DataService } from '../artistnames/data.service';
@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  public artists = [
    {'grade':1, 'name':'Davido', 'country':'Nigeria'},
    {'grade':2, 'name':'Burna Boy', 'country':'Nigeria'},
    {'grade':3, 'name':'Diamondz Platinum', 'country':'Tanzania'},
    {'grade':4, 'name':'Sarkodie', 'country':'Ghana'},
    {'grade':5, 'name':'Mr. Eazi', 'country':'Nigeria'}
  ]

  constructor(private list: DataService) { }

  ngOnInit(): void {
    this.artists = this.list.getList();
  }

}
