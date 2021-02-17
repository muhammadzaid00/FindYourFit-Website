var firebaseConfig = {
  apiKey: "AIzaSyBPCjkn9STSsWWRTcN2a9WuU99ae_k7WM4",
  authDomain: "my-fyp-project-000.firebaseapp.com",
  projectId: "my-fyp-project-000",
  storageBucket: "my-fyp-project-000.appspot.com",
  messagingSenderId: "414555294481",
  appId: "1:414555294481:web:10ab592ed5be6f7795dab0",
  measurementId: "G-MF5VZG7GMF",
};

firebase.initializeApp(firebaseConfig);
var history_db = firebase.firestore();

// Show Seeker history
const sHistory = document.querySelector("#history_whole_container");

var myauth = firebase.auth();
var userID = "";
myauth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User id:", user.uid);
    userID = userID + user.uid;

    history_db
      .collection("seekers")
      .doc(userID)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data().Name);
          console.log("Document data:", doc.data().Trainer);

          sHistory.innerHTML +=
            "<div id='history_container'><h1>My History</h1><p>" +
            "<span>CONGRATULATIONS!</span> You are successfully registered as fitness seeker.</p><br> <p>" +
            "Your Trainer Name is:</p><h4>" +
            doc.data().Trainer +
            "</h4><br><br><p>" +
            "The service that you want to gain is:</p><h4>" +
            doc.data().Name +
            "</h4></div>";
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  } else {
    console.log("User is not available.");
  }
});

//this is workng in IF

// history_db
// .collection("seekers")
// .doc(userID)
// .get()
// .then(function (doc) {
//   if (doc.exists) {
//     console.log("Document data:", doc.data().Name);
//     console.log("Document data:", doc.data().Trainer);

//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// })
// .catch(function (error) {
//   console.log("Error getting document:", error);
// });

//------------------------------------------------------- THIS CODE IS WORKING PREVIOUSLY

// history_db
//   .collection("seekers")

//   .onSnapshot(function (querySnapshot) {
//     querySnapshot.docChanges().forEach(function (change) {
//       if (change.type === "added") {
//         console.log("Showing history");
//         sHistory.innerHTML +=
//           "<div id='history_container'><h1>My History</h1><p>" +
//           "<span>CONGRATULATIONS!</span> You are successfully registered as fitness seeker.</p><br> <p>" +
//           "Your Trainer Name is:</p><h4>" +
//           change.doc.data().Trainer +
//           "</h4><br><br><p>" +
//           "The service that you want to gain is:</p><h4>" +
//           change.doc.data().Service +
//           "</h4></div>";
//       }
//     });
//   });
document.querySelector("#changing_whole_container").style.display = "none";

function cancel_request() {
  document.querySelector("#history_whole_container").style.display = "none";
  document.querySelector("#quit_training").style.display = "none";

  document.querySelector("#changing_whole_container").style.display = "block";
}
