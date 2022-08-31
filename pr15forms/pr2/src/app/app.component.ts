import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      usernameField: new FormControl(null, Validators.required),
      emailField: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      genderOption: new FormControl("male"),
    });
  }

  onSubmit() {
    console.log("first", this.signupForm);
  }
}
