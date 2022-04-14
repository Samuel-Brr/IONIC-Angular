import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.scss'],
})
export class RecipeComponentComponent implements OnInit {

  @Input() recipeItem: Recipe;

  constructor() { }

  ngOnInit() {}

}
