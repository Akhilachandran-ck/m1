const express=require("express");
const router=express.Router();
const jwt=require('jsonwebtoken')
const employeeModel=require("../model/employeemodel.js");
router.use(express.json());

router.post("/addemployee/add",async(req,res)=>{
  try {
      var item=req.body;
var data=new employeeModel(item);
await data.save();
res.status(200).send("data added successfully")
  } catch (error) { 
      res.status(404).send("unable to send  data")
 
  }
});
router.get("/addemployee/get",async(req,res)=>{
  try {
      var data=await employeeModel.find();
      res.status(200).send(data);
      
  } catch (error) {
      res.status(404).send("unable to getdata");
  
  }

  router.delete("/addemployee/del/:id",async(req,res)=>{




    try {
        await employeeModel.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted successfully");
        
    } catch (error) {
        res.status(404).send("unable to delete data");

    }
   
})
}
)

router.put("/addemployee/edit/:id",async(req,res)=>{




  try {
      await employeeModel.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).send("edited successfully");
      
  } catch (error) {
      res.status(404).send("unable to edit data");

  }
 
})



router.post("/login",async(req,res)=>{
    try {
        const user=await employeeModel.findOne({email:req.body.email});
        const payload={email:'admin123@gmail.com',password:'Admin123'}

        if((req.body.email=='admin123@gmail.com') && (req.body.password=='Admin123')){
            const token=jwt.sign(payload,'blogApp')
            console.log(token)
             res.status(200).send({message:'Login successful',token:token})
          
          }
         
            
          else if(user.password==req.body.password)
            {
              res.status(200).send({message:'Login successful'})
          
          
            }

            else if(!user){
                res.status(201).send({message:'User not found'})
                  }
  

  else{
    res.status(404).send("Invalid creddentials")

  }
    } catch (error) { 
console.log(error)       
    }
});












    


router.post("/employee/add",async(req,res)=>{
    try {
        var item1=req.body;
  var data1=new employeeModel(item1);
  await data1.save();
  res.status(200).send("data added successfully")
    } catch (error) { 
        res.status(404).send("unable to send  data")
   
    }
  });
  router.get("/employee/get",async(req,res)=>{
    try {
        var data1=await employeeModel.find();
        res.status(200).send(data1);
        
    } catch (error) {
        res.status(404).send("unable to getdata");
    
    }
}
)
  
    router.delete("/employee/del/:id",async(req,res)=>{
  
        
  
  
      try {
          await employeeModel.findByIdAndDelete(req.params.id);
          res.status(200).send("deleted successfully");
          
      } catch (error) {
          res.status(404).send("unable to delete data");
  
      }
     
  })
  
  
  router.put("/employee/edit/:id",async(req,res)=>{
  
  
  
  
    try {
        await employeeModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send("edited successfully");
        
    } catch (error) {
        res.status(404).send("unable to edit data");
  
    }
   
  })
  
  
  router.post("/signup/add",async(req,res)=>{
    try {
        var item1=req.body;
  var data1=new employeeModel(item1);
  await data1.save();
  res.status(200).send("data added successfully")
    } catch (error) { 
        res.status(404).send("unable to send  data")
   
    }
  });
  
  
    

  
  

  
  







  










  
  
  module.exports=router;
  
  
  
  
  
  
      
  
  







