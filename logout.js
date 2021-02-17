var firebaseConfig = {
  apiKey: "AIzaSyBPCjkn9STSsWWRTcN2a9WuU99ae_k7WM4",
  authDomain: "my-fyp-project-000.firebaseapp.com",
  projectId: "my-fyp-project-000",
  storageBucket: "my-fyp-project-000.appspot.com",
  messagingSenderId: "414555294481",
  appId: "1:414555294481:web:10ab592ed5be6f7795dab0",
  measurementId: "G-MF5VZG7GMF",
};

// Initialize Firebase

var test_auth = firebase.auth();

test_auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log("i m login");
  } else {
    console.log("Not login");
    window.location = "myhome.html";
  }
});
