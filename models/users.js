const mongoose=require('mongoose');

const User=mongoose.model('Users',new mongoose.Schema({
    username:String,
    password:String,
    superadmin:Boolean,
    admin:Boolean,
    viwer:Boolean,
    project:Array,
    name:String,
    category:String,
    conNumber:String,
    status:String
}));
module.exports.User=User;