import { Component } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divTrigger", [
      state(
        "normal",
        style({ "background-color": "red", transform: "translateX(0)" })
      ),
      state(
        "highlighted",
        style({ backgroundColor: "blue", transform: "translateX(100px)" })
      ),
      transition("normal => highlighted", animate(300)),
      transition("highlighted => normal", animate(800)),
    ]),
  ],
})
export class AppComponent {
  list = ["Milk", "Sugar", "Bread"];
  stateValue = "normal"; // название переменной делаем по своему, но должно совпадать с другими местами

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.stateValue === "normal"
      ? (this.stateValue = "highlighted")
      : (this.stateValue = "normal");
  }

  onShrink() {}
}
