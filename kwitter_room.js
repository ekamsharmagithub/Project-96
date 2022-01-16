
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

user_name = localStorage.getItem("Username");

document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!";



function addroom() {
      room_name = document.getElementById("room_name").value;

     localStorage.setItem("Roomname",room_name);
 
     window.location = "kwitter_page.html";

     firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
  });
}

function logout() {
      localStorage.removeItem("Username", user_name);
      localStorage.removeItem("Roomname", room_name);
          window.location = "index.html";
      }
      

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

     //End code
     });});}
getData();


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("Roomname", name);
      window.location = "kwitter_page.html";
}

console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;


