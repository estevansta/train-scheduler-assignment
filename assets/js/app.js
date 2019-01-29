// Initialize Firebase
    var config = {
        apiKey: "AIzaSyAbEIGgP_yjeoPvPz3oRrNb86RNDLcId6g",
        authDomain: "train-assignment-7217b.firebaseapp.com",
        databaseURL: "https://train-assignment-7217b.firebaseio.com",
        projectId: "train-assignment-7217b",
        storageBucket: "",
        messagingSenderId: "503112873628"
      };
      firebase.initializeApp(config);

$( "#submit" ).click(function() {
    console.log("Clicked!");
  });