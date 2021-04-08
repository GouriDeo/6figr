const mongoose =require('mongoose')
const Schema = mongoose.Schema;
const RecordSchema = mongoose.Schema(
    {
        track: [{
            distance: Number,
            duration : Number,
            speed : Number,
            date : String
        }],
        userId:  {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'User'
        }
        
    },{
        timestamps : true
    }     
)
module.exports = mongoose.model('Record',RecordSchema);