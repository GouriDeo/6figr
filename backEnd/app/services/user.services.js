const User = require('../model/user.model');
const Record = require('../model/track.model');

var bcrypt = require('bcryptjs');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const { log } = require('console');

exports.signUp = async function(req,res,next){
    var userExist = await User.findOne({
        email: req.body.email        
    })

    if(userExist){
        res.send({
            message:'User already exists, try different email id'
        })
    }

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })

        let userResponse = await User.create(user);

        let record = new Record({
            userId : user._id
        })
        var recordResponse = await Record.create(record)

        res.send({
            status: userResponse.name + 'Registered'
        });
}


exports.login = async function(req,res){
    try{
        var userExists = await User.findOne({
            email:req.body.email
        })
        if(userExists){
            if(req.body.password == userExists.password){
                
                const payload = {
                    _id : userExists._id,
                    email: userExists.email,
                    name : userExists.name
                }

                let token = jwt.sign(payload, process.env.SECRET_KEY,{
                    expiresIn:1140
                })
                res.json({token:token})
                console.log(token);

            }else{
                res.status(401).send({
                    message : "Worng password"
                })
            }
        }
        else{
            res.status(401).send({
                message : "Invalid email"
            })
        }
    }
    catch(err){
        res.send(err)
    }
}