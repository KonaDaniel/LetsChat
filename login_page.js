

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
  


  function adduser(){

    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    window.location = "room_page.html";
}

   