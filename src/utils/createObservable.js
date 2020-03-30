import { Observable } from "rxjs";

export const createObservableFromFirebase = (promise, doneValue) => {
  return Observable.create(observer => {
    promise
      .then(() => {
        observer.next(doneValue ? doneValue : "done");

        observer.complete();
      })
      .catch(err => {
        observer.error(err.message);
      });
  });
};
