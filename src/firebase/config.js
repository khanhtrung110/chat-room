
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCE8MoXsVWZoJQ5S5vvFvaAJhNQFOTzKWk",
  authDomain: "vue-js-57a1a.firebaseapp.com",
  projectId: "vue-js-57a1a",
  storageBucket: "vue-js-57a1a.appspot.com",
  messagingSenderId: "182230301880",
  appId: "1:182230301880:web:017cb636d5e7867c3a484d"
};

// init firebasess
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }