import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistnames',
  templateUrl: './artistnames.component.html',
  styleUrls: ['./artistnames.component.css']
})
export class ArtistnamesComponent implements OnInit {
   public artists = [
    {'grade':1, 'name':'Davido', 'country':'Nigeria'},
    {'grade':2, 'name':'Burna Boy', 'country':'Nigeria'},
    {'grade':3, 'name':'Diamondz Platinum', 'country':'Tanzania'},
    {'grade':4, 'name':'Sarkodie', 'country':'Ghana'},
    {'grade':5, 'name':'Mr. Eazi', 'country':'Nigeria'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
