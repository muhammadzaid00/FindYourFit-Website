function sendEmailToAdmin() {
  var complainerEmail = document.querySelector("#complaint_email").value;
  var complainerMessage = document.querySelector("#complaint_message").value;
  Email.send({
    Host: "smtp.gmail.com",
    Username: "mzaid6752@gmail.com",
    Password: "safarmore12345",
    To: "mzaid6752@gmail.com",
    From: complainerEmail,
    Subject: "Query",
    Body: complainerMessage,
  })
    .then(function () {
      console.log("Email sent");
    })
    .catch(function (error) {
      console.error("Error sending email: ", error);
    });
}
