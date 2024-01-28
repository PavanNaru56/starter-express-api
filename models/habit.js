//import mongoose
const mongoose = require('mongoose');
//create the habit schema
const habitSchema = new mongoose.Schema({


    title : {
        type : String,
        required : true
    },

    dates : [{
        date : String,
        complete : String
    }]



},{
    timestamps : true
});

//converting the schema into model
const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;