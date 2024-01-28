
const Habit = require('../models/habit');
//renders the home page 

module.exports.home = async function(req,res){

    try{

        let habits = await Habit.find({});
        
        return res.render('home',{
            title : 'home',
            habits : habits
        })

    }catch(err){
        console.log('Error in showing habits',err);
        return;
    }
    
}



