import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, take, tap } from "rxjs/operators";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        "https://maxangular-d0ef8-default-rtdb.firebaseio.com/recipes.json",
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.authService.user.pipe(take(1)).subscribe() 
    // take оператор позволяет не писать - this.authService.user.subscribe().unsubscribe() - 
    // отписываемся сразу после извлечения объекта единожды
    // смотрим следующую папку
    return this.http
      .get<Recipe[]>(
        "https://maxangular-d0ef8-default-rtdb.firebaseio.com/recipes.json"
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
