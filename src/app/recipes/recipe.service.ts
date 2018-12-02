import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

	private Recipes: Recipe[] = [
	new Recipe('Paneer Tikka', 'Spicy Indian favourite dish', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvHkvikwaUGga-YVVhjSmm5W_rUv2rSpeidbtlnBBUP51JyQGnw', [
		new Ingredient('Ground nuts', 5)
	]),
	new Recipe('Dal Makhani', 'Spicy Indian favourite dish', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvHkvikwaUGga-YVVhjSmm5W_rUv2rSpeidbtlnBBUP51JyQGnw', [
		new Ingredient('pin nuts', 58)
	])
];

constructor(private slService:ShoppingListService ){}

	getRecipes(){
		return this.Recipes.slice();
	}

	getRecipe(index: number){
		return	this.Recipes.slice()[index];
	}
	addIngredientToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients)
	}
}