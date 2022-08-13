import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  @Input("goToPage") goToPage: (value: string) => void;
  @Output() goToPageEvent = new EventEmitter<string>();

  onGoToPage(page: string) {
    this.goToPageEvent.emit(page);
  }
}
