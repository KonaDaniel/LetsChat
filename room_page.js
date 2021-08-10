 
 // Your web app's Firebase configuration

  var firebaseConfig = {

    apiKey: "AIzaSyCG02mBgknBJ4kjg8e4LIcgElNQ3HsizE8",

    authDomain: "letschat-2209a.firebaseapp.com",

    databaseURL: "https://letschat-2209a-default-rtdb.firebaseio.com",

    projectId: "letschat-2209a",

    storageBucket: "letschat-2209a.appspot.com",

    messagingSenderId: "402939980928",

    appId: "1:402939980928:web:b6b8546053cf5b9d378a65"

   };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";


    function addroom(){
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });

          localStorage.setItem("room_name" , room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

           console.log("room name" + Room_names);

           row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

           document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name) {

     console.log(name);
     
     localStorage.setItem("room_name" , name);

     window.location = "kwitter_page.html";
}

