import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  newServerName = "";
  newServerContent = "";
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // @Output() blueprintCreated = new EventEmitter<{
  //   serverName: string;
  //   serverContent: string;
  // }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // @Input() serverElements: { type: string; name: string; content: string }[];

  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  // 1
  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  // 2
  // onAddServer(nameInput: HTMLInputElement) {
  //   this.serverCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent,
  //   });
  // }

  // 2
  onAddServer(nameInput: HTMLInputElement) {
    console.log("serverContentInput", this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  // 1
  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  // 2
  // onAddBlueprint(nameInput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent,
  //   });
  // }
  // 3
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
