
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;


function handleRequest1(request1, response1) {

  // Send the below string to the client when the user visits the PORT URL
  response1.end("Wow!  You are an excellent coder.  You just created a server!");
}

function handleRequest2(request2, response2) {

  // Send the below string to the client when the user visits the PORT URL
  response2.end("But too bad you are really lousy at javascript and don't even get me started on constructors.  Seriously...you don't even get the syntax.");
}


var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);



//First Server
server1.listen(PORT1, function() {


  console.log("It Works!! This is your first server.  Server listening on: http://localhost:" + PORT1);
});

//Second Server
server2.listen(PORT2, function() {

  console.log("It Works!! This is your second server.  Server listening on: http://localhost:" + PORT2);
});

