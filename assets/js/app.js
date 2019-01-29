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

    var currentTime = Date.now();
    var randomFormat = "MM/DD/YYYY";

    $("#submit").on("click", function() {
        event.preventDefault();
        // current time 
        var currentTime = Date.now();
        //adds to firebase database 
        var ref = firebase.database().ref("table-data").child(
            currentTime).set({
            [currentTime]: true
            });
        // format the unix time to hh:mm in console.log
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
        
        // getting the user input into the console that assigns a value to the id's in html
        var trainName = $("#trainName").val() || '';;
        var destination = $("#destination").val() || '';;
        var firstTrainTime = $("#firstTrainTime").val() || '';;
        var frequency = $("#frequency").val() || '';;
        console.log("TRAIN NAME: " + trainName);
        console.log("TRAIN DESTINATION: " + destination);
        console.log("FIRST TRAIN TIME: " + firstTrainTime);
        console.log("EVERY: " + frequency + " MINUTES");

        // new train variable for user inputs
        var newTrain = {
            train: trainName,
            destination: destination,
            initialTime: firstTrainTime,
            frequency: frequency,
        }});

    

