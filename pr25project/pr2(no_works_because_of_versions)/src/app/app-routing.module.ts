import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    // loadChildren: "./recipes/recipes.module#RecipesModule",
    loadChildren: () =>
      import("./recipes/recipes.module").then((m) => m.RecipesModule),
  }, // loadChildren - for lazy loading
  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping.module").then((m) => m.ShoppingModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
