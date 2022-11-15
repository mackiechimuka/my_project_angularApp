import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListServices } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipes.model";
@Injectable()
export class RecipeService{
    recipeSelected = new Subject<Recipe>();
    recipeChanged = new Subject<Recipe[]>();
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

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());

      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }


     


}