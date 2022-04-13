import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Burger',
      imageUrl: 'https://images.rtl.fr/~c/770v513/rtl/www/1460953-un-hamburger-image-d-illustration.jpg',
      ingredients: ['Bun', 'Meat'],
    },
    {
      id: 'r2',
      title: 'Fried chicken',
      imageUrl: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/04/Fried_Chicken-1024x536.png',
      ingredients: ['Chicken', 'Fries'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
