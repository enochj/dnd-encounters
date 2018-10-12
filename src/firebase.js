import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyBpRLIIjcgwcL2rj5laMp9aowtv41gSoSg",
  authDomain: "encounter-manager.firebaseapp.com",
  databaseURL: "https://encounter-manager.firebaseio.com",
  projectId: "encounter-manager",
  storageBucket: "encounter-manager.appspot.com",
  messagingSenderId: "543480037179"
};
firebase.initializeApp(config);
export default firebase;