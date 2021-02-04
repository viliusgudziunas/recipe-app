import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private editMode = false;
  private editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscribeToEditing();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAdd(form: NgForm) {
    const { name, amount } = form.value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }

  private subscribeToEditing() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (id) => {
        this.editMode = true;
        this.editedItemIndex = id;
      }
    );
  }
}
