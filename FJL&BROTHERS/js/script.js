$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarNavDropdown").collapse('hide');
    }
  });
  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDr8o-TWokFZnmiubYBBY2ShAc_ICc1IU8",
    authDomain: "fjl-and-brothers.firebaseapp.com",
    databaseURL: "https://fjl-and-brothers.firebaseio.com",
    projectId: "fjl-and-brothers",
    storageBucket: "fjl-and-brothers.appspot.com",
    messagingSenderId: "623266474834"
  };
  firebase.initializeApp(config);
  //Reference messages collection
  var messagesRef = firebase.database().ref('messages');

  //Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);

  //submit form
  function submitForm(e) {
    e.preventDefault(); //Se utiliza para que no cargue otro html al hacer click en submit
    //Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    saveMessage(fname, lname, email, phone, message);
  }

  //Function to get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  //Save message to firebase
  function saveMessage(fname, lname, email, phone, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message
    });
  }
});