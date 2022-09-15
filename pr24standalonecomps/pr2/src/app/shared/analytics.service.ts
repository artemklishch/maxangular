import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
// @Injectable()
export class AnalyticsService {
  registerClick() {
    console.log("Clicked!");
  }
}
