
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB0pxl7om5i5L_16yzOS3BT2gsgXdidbgY",
      authDomain: "lets-chat-app-98f33.firebaseapp.com",
      databaseURL: "https://lets-chat-app-98f33-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-98f33",
      storageBucket: "lets-chat-app-98f33.appspot.com",
      messagingSenderId: "768573955939",
      appId: "1:768573955939:web:415ab6840a02ee92097d56",
      measurementId: "G-XHLB2CWLKY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
