import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";


export class ShoppingListServices{
    ingredientsChanged = new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
   private ingredients: Ingredients[] =[
        new Ingredients('Apples',5),
        new Ingredients('Tomatoes',1)
      ];

    getIngredients(){
        return this.ingredients.slice()
    }
    addIngredients(ingredients:Ingredients){
        this.ingredients.push(ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredient(ingredient:Ingredients[]){
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index:number){
        return this.ingredients[index];

    }

    updateIngredient(index:number,newIngredient:Ingredients){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }


  
}