const mongoose = require ('mongoose');

const employeeSchema = mongoose.Schema({

    name:{
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:Number,

    },
    date_of_joining:{
        type:Date,
        dafault:new Date()
    }


});

const employeeModel = mongoose.model("employee",employeeSchema);
module.exports = employeeModel;