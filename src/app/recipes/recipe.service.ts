import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Garlic Butter Baked Chicken",
      "Sample Description",
      "https://www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2.jpg",
      [
        new Ingredient("Chicken", 1),
        new Ingredient("Garlic", 5),
        new Ingredient("Butter", 2)
      ]),

    new Recipe("Something Else",
      "Sample Description",
      "https://www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-1.jpg",
      [
        new Ingredient("Something", 10),
        new Ingredient("Other Thing", 52)
      ])
  ];
  
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

   addToList(ingredients: Ingredient[]) {
     this.shoppingListService.addIngredients(ingredients);
   }
}
