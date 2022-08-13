import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBacisHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "green";
  }
}
