import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
 private ingredients: Ingredient[] = [
 		new Ingredient("mustard",1),
 		new Ingredient("wheat flour",1),
 		new Ingredient("garlic",1)
 	];

 	getIngredients(){
 		return this.ingredients.slice();		
 	}

 	addIngredients(ingredient: Ingredient){
 		this.ingredients.push(ingredient);
 	}
}