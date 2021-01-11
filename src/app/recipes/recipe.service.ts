import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
