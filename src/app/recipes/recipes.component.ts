import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({ selector: 'app-recipes', templateUrl: './recipes.component.html' })
export class RecipesComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'This is a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'Recipe 2',
      'This is a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
  ];
  selectedRecipe: Recipe;

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
