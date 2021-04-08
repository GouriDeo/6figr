const User = require('../model/user.model');
const Record = require('../model/track.model');
const userService = require('../services/user.services')


exports.createRecord = async function(req,res){
    var user = await Record.findOne({
        userId : req.body.userId
        })

    if(user){

        let distancecal = (req.body.km)+(req.body.meter/1000);
        let durationcal = req.body.hr+(req.body.min/60);
        let speedCal= distancecal/durationcal;
        speed_r = speedCal.toFixed(2);

        var record = {
            distance : distancecal,
            duration : durationcal,
            speed : speed_r,
            date : req.body.date
            }
        user.track.push(record);
        await user.save();
        res.send({
            message : "Record save"
        })
    }
}

exports.average = async function(req,res){
    var user = await Record.findOne({
        userId : req.body.userId
    })

    if(user){
        
        d=user.__v
        start = d-7;
        if(start <0 ){
            start=0;
        }
        let addition_distance=0;
        let addition_speed = 0;
        let count=0;
        for(i=start;i<d;i++){
              addition_distance = addition_distance+user.track[i].distance
              addition_speed = addition_speed + user.track[i].speed
                count++;
          }
          let avg_dist = (addition_distance/count).toFixed(2);
          let avg_speed = (addition_speed/count).toFixed(2);
          
          res.send({
            Avg_dist:  avg_dist,
            Avg_speed:  avg_speed});

          console.log("Avg dist"+addition_distance/count+"avd speed = "+addition_speed/count)
     
    }else{
        res.send({
            message : "user not found"
        })
    }

}