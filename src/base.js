import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDz1t5MQOGZWzo5B4GOm68B5uCDnp8qaB8',
  authDomain: 'chatbox-app-ea1ce.firebaseapp.com',
  databaseURL: 'https://chatbox-app-ea1ce.firebaseio.com',
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
