import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ 
  new Recipe('Hot Dog', 'This is a recipe for Hot Dog', 
  	'https://upload.wikimedia.org/wikipedia/commons/b/b1/Coneyhdog.jpg'), 
   new Recipe('Test Recipe', 'This is a test recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/Coneyhdog.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
