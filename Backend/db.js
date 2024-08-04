const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://officialnikit120598:IitrhEw5JR0dYLNg@cluster0.y0tr6dt.mongodb.net/paisabhejo")

const userSchema = new mongoose.Schema({
    username : String ,
    password : String,
    firstName : String,
    lastName  : String
});

const accountSchema = new mongoose.Schema({
    userId : {
        type :mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    
    balance : {
        type : Number,
        required : true

    }
})

const User = mongoose.model("User" , userSchema)
const Account = mongoose.model("Account" , accountSchema)
module.exports = {
    User,
    Account
};