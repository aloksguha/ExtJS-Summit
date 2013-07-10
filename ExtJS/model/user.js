/**
 * Created with JetBrains WebStorm.
 * User: Alok Guha
 * Date: 7/10/13
 * Time: 05:41 PM
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema  = new Schema(
    {
        name :{
            first : String,
            last : String
        },
        userPic : String,
        team : String,
        skills : [String]
        //lastLogin : { type: Date, default: Date.now }
    }
);

mongoose.model('user', userSchema);
