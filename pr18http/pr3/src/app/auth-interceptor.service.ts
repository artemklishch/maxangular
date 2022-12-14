import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
// import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log("Request is on its way!", req);
    // const modifiedRequest = req.clone({url: "some-new-url", headers: req.headers.append()})
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });
    // return next.handle(req);
    return next.handle(modifiedRequest);
    // return next.handle(modifiedRequest).pipe(
    //   tap((event) => {
    //     console.log("event", event);
    //     if (event.type === HttpEventType.Response) {
    //       console.log("Response arrived! Bodu data is: " + event.body);
    //     }
    //   })
    // );
  }
}
