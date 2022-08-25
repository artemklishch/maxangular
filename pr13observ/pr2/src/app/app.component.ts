import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedObserver: Subscription;
  constructor(private userServise: UserService) {}

  ngOnInit() {
    this.activatedObserver = this.userServise.ectivatedEmitter.subscribe(
      (isActivate) => {
        this.userActivated = isActivate;
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedObserver.unsubscribe();
  }
}
