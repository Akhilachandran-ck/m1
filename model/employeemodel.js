const mongoose=require("mongoose");
const employeeSchema=mongoose.Schema(
{
    name:String,
    email:String,
password:String,
designation:String,
salary:Number,
place:String,
phone:Number
},



);


const employeeModel = mongoose.model('exammodeldatas',employeeSchema);
module.exports=employeeModel;