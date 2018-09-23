import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBoyrE_6mC2asKD-YLlG_Kpu3hAcWua5fQ",
  authDomain: "react-quiz-app-807af.firebaseapp.com",
  databaseURL: "https://react-quiz-app-807af.firebaseio.com",
  projectId: "react-quiz-app-807af",
  storageBucket: "react-quiz-app-807af.appspot.com",
  messagingSenderId: "779981285237"
};
const fb = firebase.initializeApp(config);

export default fb;
