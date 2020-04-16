import { from, forkJoin, ReplaySubject } from 'rxjs'
import {map } from "rxjs/operators"


export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAEO58c3114k0Gd7e2gCtpkcX5IaUbXdsc",
  authDomain: "movie-2b2d3.firebaseapp.com",
  databaseURL: "https://movie-2b2d3.firebaseio.com",
  projectId: "movie-2b2d3",
  storageBucket: "movie-2b2d3.appspot.com",
  messagingSenderId: "383973344493",
  appId: "1:383973344493:web:271d9b1fbc18edb45538e4",
  measurementId: "G-GFYQN1WQH2"
};



export const lazyLoadFireBase = (config) => {
  const app$ = from(import('firebase/app'))
  const firestore$ = from(import('firebase/firestore'))
  const fireAuth$ = from(import('firebase/auth'))
  const database$ = from(import('firebase/database'))

  return forkJoin(app$, firestore$, fireAuth$,database$ ).pipe(
      map(([firebase]) => {
          const app = firebase.initializeApp(config)
          app.firestore().enablePersistence()

          return app
      })
  )
}

const firebaseApp$ = new ReplaySubject(1);
firebaseApp$.asObservable();




export {firebaseApp$}


