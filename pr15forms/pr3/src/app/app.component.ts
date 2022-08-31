import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ["Chris", "Anna"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        usernameField: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        emailField: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmail
        ),
      }),
      genderOption: new FormControl("male"),
      hobbies: new FormArray([]),
    });
    this.signupForm.valueChanges.subscribe((value) => {
      console.log("value", value);
    });
    this.signupForm.statusChanges.subscribe((status) => {
      console.log("status", status);
    });
    // this.signupForm.setValue({
    //   userData: {
    //     usernameField: "Bob",
    //     emailField: "t@test.com",
    //   },
    //   genderOption: "male",
    //   hobbies: [],
    // });
    this.signupForm.patchValue({
      userData: {
        usernameField: "Bob",
      },
    });
  }

  onSubmit() {
    console.log("first", this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    // return { nameIsForbidden: false };
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  // getControls() {
  //   return (<FormArray>this.signupForm.get('hobbies')).controls;
  // }

  // get controls() {
  //   return (this.signupForm.get('hobbies') as FormArray).controls;
  // }
}
