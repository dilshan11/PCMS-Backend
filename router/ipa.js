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
        maintopic:req.body.maintopic,
       
        contractName:req.body.projectDetails.contractName,
        contractNumber:req.body.projectDetails.contractNumber,
        startDate:req.body.projectDetails.startDate,
        finishDate:req.body.projectDetails.finishDate,
        contractAmount:req.body.projectDetails.contractAmount,
        maximumRetention:req.body.projectDetails.maximumRetention,
        advance:req.body.projectDetails.advance,
        paymentStatus:req.body.projectDetails.paymentStatus
    });
    
      let result= await ipa.save();
      result=await Ipa.find({project:req.body.project})
      res.send(result[0]);
      return
    }
     
    onedoc=onedoc[0];
    onedoc.basecontent=req.body.base;
    onedoc.subtopic=req.body.subtopic;
    onedoc.maintopic=req.body.maintopic;

        onedoc.contractName=req.body.projectDetails.contractName,
        onedoc.contractNumber=req.body.projectDetails.contractNumber,
        onedoc.startDate=req.body.projectDetails.startDate,
        onedoc.finishDate=req.body.projectDetails.finishDate,
        onedoc.contractAmount=req.body.projectDetails.contractAmount,
        onedoc.maximumRetention=req.body.projectDetails.maximumRetention,
        onedoc.advance=req.body.projectDetails.advance,
        onedoc.paymentStatus=req.body.projectDetails.paymentStatus

    let result=await onedoc.save();
    result=await Ipa.find({project:req.body.project})
    res.send(result[0]);
   
});


router.post('/getall',async(req,res)=>{
     let result=await Ipa.find({project:req.body.project});
    
     result=result[0];
    
     res.send(result);
})

module.exports=router;