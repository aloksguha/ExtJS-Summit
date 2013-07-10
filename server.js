/**
 * Created with JetBrains WebStorm.
 * User: Alok Guha
 * Date: 7/10/13
 * Time: 05:41 PM
 */
var express = require('express'),
   mongoose = require('mongoose');
   //,colors = require('colors');

var app = express(),
     userModel = require('./ExtJS/model/user')
    ,userRoute = require('./ExtJS/routes/user');

app.get('/',function(req,res){
    res.redirect('/index.html');
});

app.configure(function(){
    app.use(express.directory(__dirname + '/ExtJS'));
    app.use(express.static(__dirname + '/ExtJS'));
});

mongoose.connect('mongodb://localhost/ExtTest');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
   console.log('Successfully mongodb is connected');
});


app.post('/user',userRoute.newUser);


var port = 5000;
app.listen(port,function(){
    console.log("Listening on Port "+port);
});

