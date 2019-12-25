const express=require('express');
const {Ipa}=require('../models/ipa');
const router=express.Router();

router.post('/save',async(req,res)=>{
    let ipa=new Ipa({
        basecontent:req.body.base,
        project:req.body.project
    });
    
    let result=await Ipa.deleteOne({project:req.body.project});
     result=await ipa.save();
    res.send(result);
});

router.post('/getall',async(req,res)=>{
     let result=await Ipa.find({project:req.body.project});
     result=result[0];
    
     res.send(result);
})

module.exports=router;