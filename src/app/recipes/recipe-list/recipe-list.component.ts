import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://realfood.tesco.com/media/images/RFO-1400x919-Jimmys-Steak-for-two-73e9d0dc-02fa-43c3-af20-6a32fc86d1e9-0-1400x919.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2','https://realfood.tesco.com/media/images/RFO-1400x919-Jimmys-Steak-for-two-73e9d0dc-02fa-43c3-af20-6a32fc86d1e9-0-1400x919.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
