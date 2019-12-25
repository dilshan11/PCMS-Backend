const express=require('express');
const {Project}=require('../models/project');
const {User}=require('../models/users');
const router=express.Router();

router.post('/save',async(req,res)=>{
 
    let project=new Project({
        code:req.body.procode,
        name:req.body.proname,
        description:req.body.prodescription
    });
    
    let result=await project.save();
    
    let allusers=await User.find({viwer:true});     //get all users from DB
    for (let user of allusers){
       user.project.push(null); 
         user.save();                           // when project save add one element to array
    }
        

     result=await Project.find();
    res.send(result);

});

router.get('/getallproject',async (req,res)=>{
    let result=await Project.find();
    res.send(result);
})

router.post('/getviwerproject',async(req,res)=>{
    
    let user=await User.find({username:req.body.uname})
     let projectid=user[0].project;
    let records = await Project.find().where('_id').in(projectid).exec();       // get all project related to project id array
    res.send(records);
})

module.exports=router;