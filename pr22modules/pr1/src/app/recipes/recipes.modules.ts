import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesRoutingModule } from "./recipes-routing.module";

// @NgModule({
//   declarations: [
//     RecipesComponent,
//     RecipeListComponent,
//     RecipeDetailComponent,
//     RecipeItemComponent,
//     RecipeStartComponent,
//     RecipeEditComponent,
//   ],
//   imports: [RouterModule, CommonModule, ReactiveFormsModule],
//   exports: [
//     RecipesComponent,
//     RecipeListComponent,
//     RecipeDetailComponent,
//     RecipeItemComponent,
//     RecipeStartComponent,
//     RecipeEditComponent,
//   ],
// })
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],
//   exports: [
//     RecipesComponent,
//     RecipeListComponent,
//     RecipeDetailComponent,
//     RecipeItemComponent,
//     RecipeStartComponent,
//     RecipeEditComponent,
//   ],
// тут мы закомментировали, поскольку мы импортируем все это в файле - RecipesRoutingModule
})
export class RecipesModule {}
