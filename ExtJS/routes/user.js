/**
 * Created with JetBrains WebStorm.
 * User: mohanar
 * Date: 4/4/13
 * Time: 9:07 AM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose'),
    user = mongoose.model('user')
    //,Address = mongoose.model('Address');
/**
 * Get User Listing
 */
//exports.index  = function(req,res){
//    user.find( function(err, employees) {
//        if (err) return res.render('Error occurred');
//        res.send(employees);
//    });
//};

//exports.findById = function(req,res){
//    user.findById( req.params.id, function( err, userToFind ) {
//            if (err) {
//                res.send('Error occurred');
//                return console.log(err);
//            }
//            res.send(userToFind);
//    });
//};

//test function
//exports.newUser = function(req,res){
//   // var newUser = new user(req.body);
//
//    var u = new user();
//
//    u.name.first = "Alok";
//    u.name.last = "Guha";
//    u.userPic = "a.jpg",
//            u.team = "QO",
//            u.skills = ["A","B"]
//
//    console.log("--------");
//    console.log(u);
//    u.save(function(err){
//        if (err) {
//            res.send('Error occurred');
//            return console.log(err);
//        }
//        res.send(u);
//    });
//}

exports.newUser = function(req,res){
    var postData = '';
    req.on('data', function (chunk) {
        postData += chunk;
    }).on('end', function() {
            var userJSON = JSON.parse(postData);
            res.set('Content-Type', "application/javascript");
            var newUser = new user(userJSON);
            newUser.save(function(err){
                    if (err) {
                        res.send('Error occurred');
                        return console.log(err);
                    }
                    res.send(newUser);
                });
        });
};






//exports.newUser = function(req,res){
//    console.log(req);
//    var newUser = new user(req.body);
//    console.log("--------");
//    console.log(newUser);
//    newUser.save(function(err){
//        if (err) {
//            res.send('Error occurred');
//            return console.log(err);
//        }
//        res.send(newUser);
//    });
//}

    /*
exports.update = function(req,res){
    user.findById( req.params.id, function( err, employee ) {
        if(!employee){
            res.send('Employee not found with given id');
        }else{
            if(employee.__v != req.body.__v){
              return res.send('Please use the update employee details as ' + employee);
            }
            employee.name.first = req.body.name.first;
            employee.name.last = req.body.name.last;
            employee.increment();
            employee.save(function(err){
                if (err) {
                    res.send('Error occurred');
                    return console.log(err);
                }
                res.send(employee);
            });
        }
    });
};

exports.delete = function(req,res){
    user.findById( req.params.id, function( err, employee ) {
        if(!employee){
            return res.send('Employee not found with given id');
        }
        employee.remove(function(err){
            if (err) {
                res.send('Error occurred');
                return console.log(err);
            }
            res.send('Deleted')
        });
    });
};*/