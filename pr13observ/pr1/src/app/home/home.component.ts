import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firsObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firsObsSubscription = interval(1000).subscribe((count) => {
    //   console.log("count", count);
    // });
    const customObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater 3"));
        }
        count++;
        // observer.error();
        // observer.complete()
      }, 1000);
    });
    // const customObs = new Observable();
    this.firsObsSubscription = customObs.subscribe(
      (count) => {
        console.log("count2", count);
      },
      (error) => {
        console.log("error2", error);
        alert(error.message);
      },
      () => {
        console.log("completed");
      }
    );
  }
  ngOnDestroy(): void {
    this.firsObsSubscription.unsubscribe();
  }
}

// Observabe observse 3 things:
// - new data
// - error happened
// - process complited
