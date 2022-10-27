import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListServices } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] 

  constructor(private slService: ShoppingListServices) { }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients(); 
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredients[])=>{
      this.ingredients = ingredients;

    })
  }
  

}
