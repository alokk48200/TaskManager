const mongoose=require('mongoose');


const taskSchema=new mongoose.Schema({
    task:{
       type: String,
       trim:true,
       maxlength:[20, "shoul be max 20 l=letters"],
       required:[true, "must provide name"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports=mongoose.model("Task12", taskSchema);