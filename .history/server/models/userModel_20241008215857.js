const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default: "Admin"
    },
    password:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model("User",userSchema)