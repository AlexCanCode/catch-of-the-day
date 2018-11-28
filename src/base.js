import Rebase from 're-base'; //react-firebase tool that will allow us to mirror our state to firebase
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnN-5pmtJVUX2eH0VnqHyfEzLyCWG0msw",
    authDomain: "catch-of-the-day-alex-richards.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-alex-richards.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database()); 

//This is a Named export
export { firebaseApp };

//this is a default export 
export default base;