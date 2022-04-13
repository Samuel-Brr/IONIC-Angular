import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

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

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => recipeId === recipe.id)};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
