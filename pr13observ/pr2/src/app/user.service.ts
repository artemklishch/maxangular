// import { EventEmitter, Injectable } from "@angular/core";

// @Injectable({ providedIn: "root" })
// // { providedIn: "root" } - более сокращенный способ создагия связи с app.module.ts
// // - вместо импорта и передачи в массив providers
// export class UserService {
//   ectivatedEmitter = new EventEmitter<boolean>();
// }


import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
// { providedIn: "root" } - более сокращенный способ создагия связи с app.module.ts
// - вместо импорта и передачи в массив providers
export class UserService {
  ectivatedEmitter = new Subject<boolean>();
}
