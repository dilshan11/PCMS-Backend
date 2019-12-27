const express=require('express');
const {Ipa}=require('../models/ipa');
const router=express.Router();

router.post('/save',async(req,res)=>{
   
    
    let onedoc=await Ipa.find({project:req.body.project});
    if(onedoc.length==0){
         let ipa=new Ipa({
        basecontent:req.body.base,
        project:req.body.project,
        subtopic:req.body.subtopic,
        maintopic:req.body.maintopic
    });
      let result= await ipa.save();
      res.send(result[0]);
      return
    }
    
    onedoc=onedoc[0];
    onedoc.basecontent=req.body.base;
    onedoc.subtopic=req.body.subtopic;
    onedoc.maintopic=req.body.maintopic;
    let result=await onedoc.save();
    res.send(result);
});

router.post('/getall',async(req,res)=>{
     let result=await Ipa.find({project:req.body.project});
     result=result[0];
    
     res.send(result);
})

module.exports=router;