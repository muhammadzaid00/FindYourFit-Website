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
var tr_db = firebase.firestore();
// const submitButton = document.getElementById("#send_btn");

var trainerForm = document.querySelector("#trainer_form");
trainerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tName = document.querySelector("#tName").value;
  const tGender = document.querySelector("#tGender").value;
  const tAge = document.querySelector("#tAge").value;
  const tEmail = document.querySelector("#tEmail").value;
  const tContact = document.querySelector("#tContact").value;
  const tCity = document.querySelector("#tCity").value;
  const tAddress = document.querySelector("#tAddress").value;
  const tCnic = document.querySelector("#tCnic").value;
  const tExp = document.querySelector("#tExp").value;
  const tBank = document.querySelector("#tBank").value;
  const tService = document.querySelector("#tService").value;
  tr_db
    .collection("trainers")
    .doc()
    .set({
      Name: tName,
      Gender: tGender,
      Age: tAge,
      Email: tEmail,
      Contact: tContact,
      City: tCity,
      Address: tAddress,
      Cnic: tCnic,
      Experience: tExp,
      Bank: tBank,
      Service: tService,
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
});

function trainer_validate() {
  if (
    document.querySelector("#tName").value != "" &&
    document.querySelector("#tGender").value != "" &&
    document.querySelector("#tAge").value != "" &&
    document.querySelector("#tEmail").value != "" &&
    document.querySelector("#tContact").value != "" &&
    document.querySelector("#tCity").value != "" &&
    document.querySelector("#tAddress").value != "" &&
    document.querySelector("#tCnic").value != "" &&
    document.querySelector("#tExp").value != "" &&
    document.querySelector("#tBank").value != "" &&
    document.querySelector("#tService").value != ""
  ) {
    alert("Your data has been saved and your profile is creted successfully.");
  }
}
