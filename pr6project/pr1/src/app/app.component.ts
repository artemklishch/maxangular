import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isRecipesPage = true;
  isShoppingListPage = false;
  goToPage(page: string) {
    if (page === "isRecipesPage") {
      this.isRecipesPage = true;
      this.isShoppingListPage = false;
    } else {
      this.isShoppingListPage = true;
      this.isRecipesPage = false;
    }
  }
}
