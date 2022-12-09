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
      transition("normal <=> highlighted", animate(300)),
      // transition("normal => highlighted", animate(300)),
      // transition("highlighted => normal", animate(800)),
    ]),

    trigger("wildDivTrigger", [
      state(
        "normal",
        style({
          "background-color": "red",
          transform: "translateX(0) scale(1)",
          borderRadius: 0,
        })
      ),
      state(
        "highlighted",
        style({
          "background-color": "blue",
          transform: "translateX(100px) scale(1)",
          borderRadius: 0,
        })
      ),
      state(
        "shranken",
        style({
          "background-color": "green",
          transform: "translateX(0) scale(0.5)",
          borderRadius: 0,
        })
      ),
      transition("normal => highlighted", animate(300)),
      transition("highlighted => normal", animate(800)),
      transition("shranken <=> *", [
        style({
          "background-color": "orange",
        }),
        animate(
          1000,
          style({
            borderRadius: "50px",
          })
        ),
        animate(500),
      ]),
    ]),

    // IT DOESN'T WORK CORRECTLY
    // trigger("wildDivTrigger", [
    //   state(
    //     "normal",
    //     style({
    //       "background-color": "red",
    //       transform: "translateX(0) scale(1)",
    //       borderRadius: "0"
    //     })
    //   ),
    //   state(
    //     "highlighted",
    //     style({
    //       backgroundColor: "blue",
    //       transform: "translateX(100px) scale(1)",
    //       borderRadius: "0"
    //     })
    //   ),
    //   state(
    //     "shranken",
    //     style({
    //       backgroundColor: "green ",
    //       transform: "translateX(0) scale(0.5)",
    //       borderRadius: "0"
    //     })
    //   ),
    //   transition("normal => highlighted", animate(300)),
    //   transition("highlighted => normal", animate(800)),
    //   // transition("shranken <=> *", animate(500)), // звездочка значит любое состояние - normal/highlighted/shranken
    //   transition(
    //     "shranken <=> *",
    //     // animate(500, style({ borderRadius: "50px" }))
    //     [
    //       style({ "background-color": "orange" }),
    //       animate(1000, style({ borderRadius: "50px" })),
    //       // animate(500),
    //     ]
    //   ),
    // ]),
  ],
})
export class AppComponent {
  list = ["Milk", "Sugar", "Bread"];
  stateValue = "normal";
  wildStateValue = "normal";

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list = this.list.filter((it) => it !== item);
  }

  onAnimate() {
    this.stateValue === "normal"
      ? (this.stateValue = "highlighted")
      : (this.stateValue = "normal");
    this.wildStateValue === "normal"
      ? (this.wildStateValue = "highlighted")
      : (this.wildStateValue = "normal");
  }

  onShrink() {
    this.wildStateValue = "shranken";
  }
}
