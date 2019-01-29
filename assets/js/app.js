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


    // on click function that sends data to firebase in a table called table-data from my ID
    $("#submit").on("click", function() {
        // current time 
        var currentTime = Date.now();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
        });
    
    

