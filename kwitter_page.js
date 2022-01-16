//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBZ_FQFlZ6KezRuI1KQ8cg0DMh2S1Sidu0",
    authDomain: "the-kwitter-app-63872.firebaseapp.com",
    databaseURL: "https://the-kwitter-app-63872-default-rtdb.firebaseio.com",
    projectId: "the-kwitter-app-63872",
    storageBucket: "the-kwitter-app-63872.appspot.com",
    messagingSenderId: "878927699302",
    appId: "1:878927699302:web:e6283b21e2e1d92be6bca7",
    measurementId: "G-F388FD88B2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

//Start code

//End code
 } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    console.log("Message "+msg);
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
          dislike:0
    });
    document.getElementById("msg").value = "";
}

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
     window.location = "index.html";
 }












