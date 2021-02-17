var firebaseConfig = {
  apiKey: "AIzaSyBPCjkn9STSsWWRTcN2a9WuU99ae_k7WM4",
  authDomain: "my-fyp-project-000.firebaseapp.com",
  projectId: "my-fyp-project-000",
  storageBucket: "my-fyp-project-000.appspot.com",
  messagingSenderId: "414555294481",
  appId: "1:414555294481:web:10ab592ed5be6f7795dab0",
  measurementId: "G-MF5VZG7GMF",
};

//trainer detabase
firebase.initializeApp(firebaseConfig);
var displayData_db = firebase.firestore();

// Show Trainer data
const myProfile = document.querySelector("#profile_container");
const showProfile = document.querySelector("#trainers_profile");
// displayData_db
//   .collection("trainers")
//   .get()
//   .then((snapshot) => {
//     console.log("Data is coming.");
//     console.log(snapshot.docs);
//   });

displayData_db.collection("trainers").onSnapshot(function (querySnapshot) {
  querySnapshot.docChanges().forEach(function (change) {
    if (change.type === "added") {
      console.log("Showing data");
      myProfile.innerHTML +=
        "<div id='profile_section'><h2>" +
        change.doc.data().Name +
        "</h2> <h3>Personal Information:" +
        "</h3> <h5>Gender: " +
        change.doc.data().Gender +
        "</h5> <h5>Age: " +
        change.doc.data().Age +
        "</h5> <h5>Email: " +
        change.doc.data().Email +
        "</h5> <h5>City: " +
        change.doc.data().City +
        "</h5> <h5>Address: " +
        change.doc.data().Address +
        "</h5><h5>Cnic: " +
        change.doc.data().Cnic +
        "</h5><h5>Experience: " +
        change.doc.data().Experience +
        "</h5><h5>Service :" +
        change.doc.data().Service +
        "</h5></div>";
    }
  });
});
