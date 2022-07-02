var firebaseConfig = {
    apiKey: "AIzaSyDrJsESdMb-rng2Qe1Uq0KRu7fpAXWNjWg",
    authDomain: "kwitter-507c2.firebaseapp.com",
    databaseURL: "https://kwitter-507c2-default-rtdb.firebaseio.com",
    projectId: "kwitter-507c2",
    storageBucket: "kwitter-507c2.appspot.com",
    messagingSenderId: "846876743189",
    appId: "1:846876743189:web:85e0e216a1d4974fd9e01c"
  };
  

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send()
{
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
}
