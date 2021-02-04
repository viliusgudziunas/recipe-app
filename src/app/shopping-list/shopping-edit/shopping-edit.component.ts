import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  onAdd(form: NgForm) {
    const { name, amount } = form.value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
