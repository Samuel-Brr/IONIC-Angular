import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from '@angular/router';
import { map, tap, Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from './../recipes.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})



export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;
  recipeId: string;

  constructor(private route: ActivatedRoute,
    private recipesService: RecipesService) {

      this.route.params.pipe(
          map((p: {recipeId: string} )=>p.recipeId),
          tap((p: string) => {
            this.recipeId = p;
            console.log(this.recipeId);
            this.loadedRecipe = this.recipesService.getRecipe(this.recipeId);
          })
          )
          .subscribe();
     }



  ngOnInit() {
  }

  // paramMap => {
  //   if(!paramMap.has('recipeId')){
  //     //redirect
  //     return;
  //   }

  //   const recipeId = paramMap.get('recipeId');
  //   this.loadedRecipe = this.recipesService.getRecipe(recipeId);
  // }

}
