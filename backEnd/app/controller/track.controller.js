const trackService = require('../services/track.services')


exports.createRecord = function(req,res){
  
    req.assert('hr', 'distance cannot be blank').notEmpty();
    req.assert('min', 'distance cannot be blank').notEmpty();
    req.assert('sec', 'distance cannot be blank').notEmpty();
    req.assert('km', 'distance cannot be blank').notEmpty();
    req.assert('meter', 'distance cannot be blank').notEmpty();
    req.assert('date', 'Date cannot be blank').notEmpty();
    req.assert('userId', 'Userid cannot be empty').notEmpty();
  
    // Check for validation errors    
    var errors = req.validationErrors();
    if (errors) { 
        return res.status(400).send(errors);
     }
     else{
         trackService.createRecord(req,res)
     }     
}

exports.average = function(req,res){
  
    req.assert('userId', 'Userid cannot be empty').notEmpty();
  
    // Check for validation errors    
    var errors = req.validationErrors();
    if (errors) { 
        return res.status(400).send(errors);
     }
     else{
         trackService.average(req,res)
     }     
}