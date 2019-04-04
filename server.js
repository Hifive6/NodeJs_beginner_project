var http = require("http");
var url = require("url");

// http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);

function start(route, handle){
function onRequest(request, response)  {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + "recieved");
    route(handle, pathname, response, request);

   

//    request.addListener("data", function(postDataChunk){
//        postData += postDataChunk;
//        console.log("Recieved POST data Chunk '" + postDataChunk + "'.");
//    })

//    request.addListener("end", function(){
//        route(handle, pathname, response, postData);
//    })
}

http.createServer(onRequest).listen(8888);

console.log("Server has Started.")
} 

exports.start = start