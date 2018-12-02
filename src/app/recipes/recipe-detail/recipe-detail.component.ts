import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id: number;
  constructor(private recService: RecipeService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recService.getRecipe(this.id);
    })
  }

	addToShoppingList() {
		this.recService.addIngredientToShoppingList(this.recipe.ingredients);
	}

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
