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

    var database = firebase.database();
    var currentTime = Date.now();
    var randomFormat = "MM/DD/YYYY";

    $("#submit").on("click", function() {
        event.preventDefault();
        // current time 
        var currentTime = Date.now();
        
        // getting the user input into the console that returns value to the id's in html
        var trainName = $("#trainName").val() || '';;
        var destination = $("#destination").val() || '';;
        var firstTrainTime = $("#firstTrainTime").val() || '';;
        var frequency = $("#frequency").val() || '';;
        console.log("TRAIN NAME: " + trainName);
        console.log("TRAIN DESTINATION: " + destination);
        console.log("FIRST TRAIN TIME: " + firstTrainTime);
        console.log("EVERY: " + frequency + " MINUTES");
        // format the unix time to hh:mm in console.log
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

        // new train variable for user inputs into firebase
        var newTrain = {
            currentTime: moment(currentTime).format("hh:mm"),
            train: trainName,
            destination: destination,
            initialTime: firstTrainTime,
            frequency: frequency,
        }
        // push information to firebase
        database.ref("table-data").push(newTrain);
    
    });

    // keep saved data from firebase and place into html
    database.ref("table-data").on("child_added", function(snapshot) {
        // console log the snapshot of the data inputted and stored in database and keep displayed
        console.log(snapshot.val());
            // variables that I have; currently missing the difference of times for next arrival; minutes away
            var trainName = snapshot.val().train;
            var destination = snapshot.val().destination;
            var frequency = snapshot.val().frequency;
        //append  data to the table-data on html
        $("#table-data").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + 
        frequency + "</td><td>");

    });

