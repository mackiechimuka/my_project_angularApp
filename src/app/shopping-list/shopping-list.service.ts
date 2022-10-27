import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
export class ShoppingListServices{
    ingredientsChanged = new EventEmitter<Ingredients[]>();
   private ingredients: Ingredients[] =[
        new Ingredients('Apples',5),
        new Ingredients('Tomatoes',1)
      ];

    getIngredients(){
        return this.ingredients.slice()
    }
    addIngredients(ingredients:Ingredients){
        this.ingredients.push(ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredient(ingredient:Ingredients[]){
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


  
}