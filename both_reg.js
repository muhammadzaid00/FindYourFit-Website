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
firebase.initializeApp(firebaseConfig);
var seeker_db = firebase.firestore();
// const submitButton = document.getElementById("#send_btn");

var myauth = firebase.auth();
var userID = "";
myauth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User id:", user.uid);
    userID = user.uid;
  } else {
    console.log("User logged Out:");
  }
});

var seekerForm = document.querySelector("#seeker_form");
seekerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const sName = document.querySelector("#sName").value;
  const sGender = document.querySelector("#sGender").value;
  const sAge = document.querySelector("#sAge").value;
  const sEmail = document.querySelector("#sEmail").value;
  const sContact = document.querySelector("#sContact").value;
  const sTrainer = document.querySelector("#sTrainer").value;
  const sCity = document.querySelector("#sCity").value;
  const sAddress = document.querySelector("#sAddress").value;
  const sService = document.querySelector("#sService").value;

  seeker_db
    .collection("seekers")
    .doc(userID)
    .set({
      Name: sName,
      Gender: sGender,
      Age: sAge,
      Email: sEmail,
      Contact: sContact,
      Trainer: sTrainer,
      City: sCity,
      Address: sAddress,
      Service: sService,
      UserID: userID,
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
});

function closeSeekerRegForm() {
  document.getElementById("seeker_form").style.display = "none";
}

function seeker_validate() {
  if (
    document.querySelector("#sName").value != "" &&
    document.querySelector("#sGender").value != "" &&
    document.querySelector("#sAge").value != "" &&
    document.querySelector("#sEmail").value != "" &&
    document.querySelector("#sContact").value != "" &&
    document.querySelector("#sTrainer").value != "" &&
    document.querySelector("#sCity").value != "" &&
    document.querySelector("#sAddress").value != "" &&
    document.querySelector("#sService").value != ""
  ) {
    alert(
      "Your data has been saved and Admin will contact you ASAP via Email."
    );
  }
}
