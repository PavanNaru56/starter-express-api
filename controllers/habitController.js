const Habit = require('../models/habit');
//for creating the habit
module.exports.createHabit = async function(req,res){
   try{
    let habit = await Habit.findOne({title : req.body.title});
    
    if(habit){
        console.log('Habit exists');
        return res.redirect('/');
    }
    else{
        let habit = await Habit.create( {
            title : req.body.title,
            dates : {
                date : await getTodayDate(), complete : "none"
            }
        });
        console.log(habit.id);
        return res.redirect('/');
    }


   }catch(error){
        console.log('Error increateHabit: ', error);
        return;
   }
    
}

//for destryiong the habit

module.exports.destroy = async function(req,res){

    try{

        let habit= await Habit.findById(req.params.id);
        habit.collection.deleteOne();
        return res.redirect('back');
        



    }

    catch(err){

        console.log("Error in deleting habit",err);
        return;

    }

}

//for toggiling the habit
module.exports.toggleStatus = async function(req,res){
    try{


        let id = req.query.id;
        let date = req.query.date;

        const habit = await Habit.findById(id);
        console.log(habit);
        console.log(date);

        if(!habit){
            console.log("Habit not present");
            return res.redirect('/');
        }

        let dates = habit.dates;
        let found = false;

        dates.find((item,index) => {

            if(item.date == date){
                 if(item.complete === 'y'){
                    item.complete = 'n';
                 }else if(item.complete === 'n'){
                    item.complete = 'x';
                 }else if(item.complete === 'x'){
                    item.complete = 'y';
                 }

                 found = true;

            }

        });

        if(!found){
            dates.push({date : date, complete : 'y'});
        }

        habit.dates = dates;
        await habit.save();
        return res.redirect('/users/weekly');
            
        







    }
    catch(err){
        console.log('Error in toggling ',err);
        return;

    }
}



//funtion to get dates and month

function getTodayDate(){
    var today = new Date();

    let date = today.getDate();
    let month = today.getMonth()+1;

    let fullDate = date + "/" + month;
    return fullDate;
}