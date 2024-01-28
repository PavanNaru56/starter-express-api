
const Habit = require('../models/habit');


//gives the weekly report of the habit tracker
module.exports.weekly =  async (req,res) => {
    let habits = await Habit.find({});

    return res.render('weekly',{
        title : 'weekly',
        habits : habits,
        weeklyDates :  await getOneWeekDate()
    });
    
}

function getOneWeekDate(){
    let months = ["","Jan", "Feb", "March", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let dates = [];

    for(let i = 6; i >=  0; i--){
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - i);
        let mm = currentDate.getMonth()+1;
        mm = months[mm];
        let dd = currentDate.getDate();
        if(dd<10) dd = '0' + dd;
        dates.push(mm + " " + dd);
    }
    return dates;
}