const express=require('express');
const {User}=require('../models/users');
const router=express.Router();

router.post('/save',async(req,res)=>{
    let user=new User({
        username:req.body.add_uname,
        password:req.body.add_password,
        superadmin:req.body.superadmin,
        admin:req.body.admin,
        viwer:req.body.viwer,
        project:req.body.project,
        name:req.body.add_name,
        category:req.body.add_category,
        conNumber:req.body.add_conNumber,
        status:req.body.add_status
    });
    try{
    let message=await User.find({username:req.body.add_uname});
    if(message.length>0){return res.send({"message":"user name already exist"})}
    let result=await user.save();
    result=await User.find({viwer:true});
    res.send(result);

    }catch(e){
         
        res.send ({"message":"try again"});
    }
});

router.post('/login',async(req,res)=>{
    let result=await User.find({username:req.body.uname,password:req.body.password});
    
    if(result.length==0) return res.send(false);
    if(result[0].status.toLowerCase()=="active"){
       /// return res.send(false);
       return res.send(result);
    }else{
        return res.send(false);
    }
         
});

router.post('/passwordchange',async(req,res)=>{
    let result=await User.find({username:req.body.uname,password:req.body.oldpassword});
    if(result.length==0) return res.send(false);
    result=result[0];
    result.password=req.body.newpassword;
     result=await result.save()
   res.send(result);
})

router.get('/getallviwers',async(req,res)=>{
    let result=await User.find({viwer:true});
    res.send(result);
})

router.post('/delete',async(req,res)=>{
  let result= await User.deleteOne({username:req.body.username})

  result=await User.find({viwer:true});
  res.send(result);
})

router.post('/update',async(req,res)=>{
   
   
    let user=await User.findById(req.body.rid);
   // user.project[Number(req.body.cid)]=req.body.p_id;
     user.project.set(Number(req.body.cid),req.body.p_id);
   let result=await user.save();
   
   let a=await User.find({viwer:true});
    res.send(a);

    
})

module.exports=router;