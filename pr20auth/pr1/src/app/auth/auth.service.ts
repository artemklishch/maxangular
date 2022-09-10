import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthSignUpResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthSignUpResponse>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_-G789yca0EBszDm2C1fYgQYUHoRJM8Q",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = "An error occured!";
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case "EMAIL_EXISTS": {
              errorMessage =
                "The email address is already in use by another account.";
              break;
            }
            case "OPERATION_NOT_ALLOWED": {
              errorMessage = "Password sign-in is disabled for this project.";
              break;
            }
            case "TOO_MANY_ATTEMPTS_TRY_LATER": {
              errorMessage =
                "We have blocked all requests from this device due to unusual activity. Try again later.";
            }
          }
          return throwError(errorMessage);
        })
      );
  }
}
