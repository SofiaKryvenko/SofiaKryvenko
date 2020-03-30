import { ofType } from 'redux-observable'
import { combineLatest } from 'rxjs';
import {map, flatMap } from 'rxjs/operators'
import { authState } from 'rxfire/auth'

import { START_AUTH_LISTENER } from "../constants/actionTypes";
import { setAuthenticated, setUnauthenticated } from '../actions/auth';

export const startAuthListenerEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(START_AUTH_LISTENER),
    flatMap(() => {
      return combineLatest(firebase)
    }),
    flatMap(([app]) => {
      return authState(app.auth()).pipe(
        map((user) => {
          if (user) {
            return setAuthenticated(user)
          } else {
            return setUnauthenticated()
          }
        })
      )
    })
  )