
import { EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription:Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem: Ingredients;
  @ViewChild('f') slForm:NgForm;
 
  
  constructor(private slService: ShoppingListServices) { }

  ngOnInit(){
    this.subscription = this.slService.startedEditing.subscribe((index:number)=>{
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem=this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  onSubmit(form:NgForm) {
    const value = form.value
    const newIngredient = new Ingredients(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient)
    }else{
      this.slService.addIngredients(newIngredient);
    }
    this.editMode = false;
    form.reset();
   
  

  }

  onClear(){
    this.slForm.reset();
    this.editMode = false
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear()
  }

  ngOnDestroy() {
   
    this.subscription.unsubscribe()
  }

}
