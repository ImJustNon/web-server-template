/**
 * Module dependencies.
 */
const app = require("./app.js");
const debug = require("debug")("assignment1:server");
const http = require("http");
const config = require("./configs/config.js");
 
const server_port = normalizePort(String(config.app.port));
app.set("port", server_port);
 
const server = http.createServer(app);
 
 /**
  * Listen on provided port, on all network interfaces.
  */
server.listen(server_port);
server.on("error", onError);
server.on("listening", onListening);
 
 /**
  * Normalize a port into a number, string, or false.
  */
function normalizePort(val) {
    let port = parseInt(val, 10);
   
    if (isNaN(port)) {
       // named pipe
        return val;
    }
   
    if (port >= 0) {
       // port number
        return port;
    }
   
    return false;
}
 /**
  * Event listener for HTTP server "error" event.
  */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
   
    let bind = typeof server_port === "string" ? "Pipe " + server_port : "Port " + server_port;
   
     // handle specific listen errors with friendly messages
     switch (error.code) {
       case "EACCES":
         console.error(bind + " requires elevated privileges");
         process.exit(1);
         break;
       case "EADDRINUSE":
         console.error(bind + " is already in use");
         process.exit(1);
         break;
       default:
         throw error;
     }
 }
 /**
  * Event listener for HTTP server "listening" event.
  */
 
 function onListening() {
    let addr = server.address();
    let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
 }