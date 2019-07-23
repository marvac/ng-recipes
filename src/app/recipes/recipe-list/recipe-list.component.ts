import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Garlic Butter Baked Chicken", 
    "Sample Description", 
    "https://www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2.jpg"),
    new Recipe("Something Else", 
    "Sample Description", 
    "https://www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
