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
var auth = firebase.auth();
var db = firebase.firestore();
// const submitButton = document.getElementById("#send_btn");

db.settings({ timestampInSnapshots: true });
var myform = document.querySelector("#form_id");
myform.addEventListener("submit", (e) => {
  e.preventDefault();

  const seekerName = document.querySelector("#seeker_name").value;
  const seekerEmail = document.querySelector("#seeker_email").value;
  const seekerPassword = document.querySelector("#seeker_password").value;

  // db.collection("users")
  //   .doc()
  //   .set({
  //     Name: seekerName,
  //     Email: seekerEmail,
  //     Password: seekerPassword,
  //   })
  //   .then(function () {
  //     console.log("Document successfully written!");
  //   })
  //   .catch(function (error) {
  //     console.error("Error writing document: ", error);
  //   });

  auth
    .createUserWithEmailAndPassword(seekerEmail, seekerPassword)
    .then((cred) => {
      console.log(cred.user);
      validate();
    });
});

function validate() {
  if (
    document.querySelector("#seeker_name").value != "" &&
    document.querySelector("#seeker_email").value != "" &&
    document.querySelector("#seeker_password").value != ""
  ) {
    alert("Your Account has been created successfully, Now you can Login");
    myform.reset();
  }
}

// const list_div = document.querySelector("#list_div");

// db.collection("users").onSnapshot(function (querySnapshot) {
//   querySnapshot.docChanges().forEach(function (change) {
//     if (change.type === "added") {
//       list_div.innerHTML +=
//         "<div class='list_items'><h3>Name:" +
//         change.doc.data().Name +
//         "</h3> <p>Email:" +
//         change.doc.data().Email +
//         "</p></div>";
//     }
//   });
// });

//signin

var signin_form = document.querySelector("#signin_form");

signin_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputEmail = document.querySelector("#input_email").value;
  const inputPassword = document.querySelector("#input_password").value;

  // db.collection("users")
  //   .doc()
  //   .set({
  //     Name: seekerName,
  //     Email: seekerEmail,
  //     Password: seekerPassword,
  //   })
  //   .then(function () {
  //     console.log("Document successfully written!");
  //   })
  //   .catch(function (error) {
  //     console.error("Error writing document: ", error);
  //   });

  auth.signInWithEmailAndPassword(inputEmail, inputPassword).then((cred) => {
    signinValidation();
    closesigninForm();
    signin_form.reset();
    location.reload();
  });
});

function signinValidation() {
  if (
    document.querySelector("#input_email").value != "" &&
    document.querySelector("#input_password").value != ""
  ) {
    alert("You are Log In.");
  }
}

//logout
var l_btn = document.querySelector("#logout_tab");
var t_btn = document.querySelector("#trainer_tab");
var s_btn = document.querySelector("#service_tab");
var a_btn = document.querySelector("#about_tab");
var b_btn = document.querySelector("#blog_tab");

l_btn.addEventListener("click", (e) => {
  e.preventDefault();

  auth.signOut().then(() => {
    console.log("user sign out.");
  });
});

//listen for auth state changes.
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User log In:", user);
  } else {
    console.log("User log Out:");

    t_btn.style.display = "none";
    s_btn.style.display = "none";
    l_btn.style.display = "none";
    a_btn.style.display = "none";
    b_btn.style.display = "none";
  }
});
// var user = firebase.auth().currentUser;
// if (user) {
//   console.log(",mm");
// } else {
//   window.location = "myhome.html";
// }
