$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  window.onload = function () {
    var item = document.getElementById("contacto")
    item.style.color = '#1c9b0c';
    item.style.textShadow = '1px 1px 2px #1c9b0c';
  }
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
      //Save message
      saveMessage(fname, lname, email, phone, message);
      //Show alert
      document.querySelector('.alert').style.display = 'block';

      //Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      }, 3000);

      //clear form
      document.getElementById('contact-form').reset();
    }
  
    //Function to get form values
    function getInputVal(id) {
      return document.getElementById(id).value;
    }
  
    //Save message to firebase
    function saveMessage(fname, lname, email, phone, message) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        message: message
      });
    }
});