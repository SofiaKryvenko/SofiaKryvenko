import { Observable } from "rxjs";

export const createObservableFromFirebase = (promise) => {
  return Observable.create((observer) => {
    promise
      .then((response) => {
        observer.next(response);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err.message);
      });
  });
};
