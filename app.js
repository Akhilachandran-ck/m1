const express=require("express");
const dotenv=require("dotenv");
require("dotenv").config();

const cors=require("cors")
const app=express();
require('./db/dbConnection');

const employeeRoute=require('./route/employeeroute');

app.use(cors());
app.use('/employee',employeeRoute);



app.listen(3000, ()=>{
    console.log(`listening to  port ${process.env.port}`);

})