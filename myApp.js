require('dotenv').config()
let express = require('express');
let app = express();

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + '/views/index.html');
// });
app.get("/json",(req,res)=>{
    //res.json({"message": "Hello json"});
    if (process.env.MESSAGE_STYLE === "allCaps") {
        res.json({"message": "HELLO JSON"});
      } else {
        res.json({"message": "Hello json"});
      }
}
);
app.use(
    "/public",express.static(__dirname + '/public')
);































 module.exports = app;
 console.log("Hello World");