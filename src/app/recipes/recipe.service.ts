import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Garlic Butter Baked Chicken",
      "Sample Description",
      "https://www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2.jpg"),
    new Recipe("Something Else",
      "Sample Description",
      "https://www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-1.jpg")
  ];
  
  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }


}
