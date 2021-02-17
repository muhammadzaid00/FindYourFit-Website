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
var service_db = firebase.firestore();
const ref = firebase.storage().ref();

var myServices = document.querySelector("#dynamic_services_form");
myServices.addEventListener("submit", (e) => {
  e.preventDefault();

  //This is for picture
  var myurl = "";
  const file = document.querySelector("#dynamic_ser_pic").files[0];
  const name = new Date() + "-" + file.name;
  const metadata = {
    contentType: file.Type,
  };

  const task = ref.child(name).put(file, metadata);
  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      console.log("pic uploaded. " + url);
      alert("Image uploaded");
      const serviceName = document.querySelector("#dynamic_ser_name").value;
      const serviceDescription = document.querySelector(
        "#dynamic_ser_description"
      ).value;
      const myurl = url;
      service_db
        .collection("services")
        .doc()
        .set({
          ServiceName: serviceName,
          serviceDescription: serviceDescription,
          serviceUrl: myurl,
        })
        .then(function () {
          console.log("Document successfully written!");
          myServices.reset();
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    });
});

// display services
var show_service_db = firebase.firestore();
var ShowMyService = document.querySelector("#my_image");
var ShowMyService2 = document.querySelector("#mytext");

show_service_db.collection("services").onSnapshot(function (querySnapshot) {
  querySnapshot.docChanges().forEach(function (change) {
    if (change.type === "added") {
      console.log("Showing service details.");

      ShowMyService.innerHTML +=
        "<img src='" + change.doc.data().serviceUrl + "'</img>";

      ShowMyService2.innerHTML +=
        "<h1>" +
        change.doc.data().ServiceName +
        "</h1><p>" +
        change.doc.data().serviceDescription +
        "</p>";
    }
  });
});
