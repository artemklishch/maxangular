import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firsObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    const customObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater 3"));
        }
        count++;
      }, 1000);
    });

    // customObs.pipe(
    //   map((data: number) => {
    //     // data - это значение, которое по дефолту приходит тудa, где subscribe
    //     return "Round: " + (data + 1);
    //   })
    // );

    this.firsObsSubscription = customObs
      .pipe(
        // pipe метод может принимат неограниченное количество методов-опереторов ё
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round: " + (data + 1);
        })
      )
      .subscribe(
        (count) => {
          // console.log("Round: " + (count + 1));
          console.log(count);
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
