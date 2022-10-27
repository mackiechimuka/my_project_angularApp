import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListServices } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipes.model";
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','../../assets/images/fries.jpg',[new Ingredients('Meat',1),new Ingredients('French Fries',20)]),
      ];

    constructor(private slService: ShoppingListServices ){

    }
    
    
      getRecipes (){
        return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredient:Ingredients[]){
        this.slService.addIngredient(ingredient);
      }

     


}