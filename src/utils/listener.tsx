
import { chatStore } from '../redux'
import { setAuthenticated, setUnauthenticated } from '../actions/auth'
import { authState } from 'rxfire/auth'

export const authListener = (firebaseApp) => {
  authState(firebaseApp.auth()).subscribe((user) => {
    if (user) {
      chatStore.dispatch(setAuthenticated(user))
    } else {
      chatStore.dispatch(setUnauthenticated())
    }
  })
}