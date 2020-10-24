const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const path = require('path');

const app = express();

// app.use(express.static("public")); // this is not working now
// app.use(express.static(__dirname + '/public'));  // this is not working 
app.use("/public", express.static(path.resolve(__dirname, 'public')));   // this works😊
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/signup.html');
})

app.post('/',function(req,res){
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var emailId = req.body.email;
    console.log(firstName);
    console.log(lastName);
    console.log(emailId);
    res.set("Content-Type", "text/html");   // sometimes html tages not work properly in res.write()
                 // so to aviod it we use : res.set("Content-Type", "text/html");  
    res.write("<h3>First name is : "+ firstName +" </h3>");
    res.write("<h3>Last name is : "+ lastName+" </h3>");
    res.write("<h3>Email is : "+ emailId+" </h3>");
    res.send();
})

app.listen(3000,function(){
    console.log("server is listening at port 3000");
})