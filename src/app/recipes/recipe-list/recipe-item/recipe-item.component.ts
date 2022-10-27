import { outputAst } from '@angular/compiler';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit ,Input} from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index:number;
 

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }


}
