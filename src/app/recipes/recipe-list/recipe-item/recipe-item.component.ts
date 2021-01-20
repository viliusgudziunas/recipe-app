import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onRecipeSelected() {
    this.router.navigate([this.recipe.id], { relativeTo: this.route });
  }
}
