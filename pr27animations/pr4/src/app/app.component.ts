import { Component } from "@angular/core";
import {
  animate,
  group,
  keyframes,
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

    trigger("list1", [
      state("in", style({ opacity: 1, transform: "translateX(0)" })), // идентификатор состояния in - тут не играет роли и чисто для вида
      transition("void => *", [
        // ключевое слово void - зарезервированное, означает отсутствие конкретного состояния
        style({ opacity: 0, transform: "translateX(-100px)" }),
        animate(300),
      ]),
      transition("* => void", [
        animate(300, style({ transform: "translateX(100px)", opacity: 0 })),
      ]),
    ]),
    trigger("list2", [
      state("in", style({ opacity: 1, transform: "translateX(0)" })),
      transition("void => *", [
        animate(
          1000,
          keyframes([
            style({ transform: "translateX(-100px)", opacity: 0, offset: 0 }),
            style({
              transform: "translateX(-50px)",
              opacity: 0.5,
              offset: 0.3,
            }),
            style({ transform: "translateX(-20px)", opacity: 1, offset: 0.8 }),
            style({ transform: "translateX(0)", opacity: 1, offset: 1 }),
          ])
        ),
      ]),
      transition("* => void", [
        group([
          // этот метод для того, чтоб все, что внутри выполнялось асинхронно
          animate(300, style({ color: "red" })),
          animate(800, style({ transform: "translateX(100px)", opacity: 0 })),
        ]),
      ]),
    ]),
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

  animationStarted(event) {
    console.log("start animation event", event);
  }

  animationEnded(event) {
    console.log("end of the animations", event);
  }
}
