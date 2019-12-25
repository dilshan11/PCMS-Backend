const mongoose=require('mongoose');

const Ipa=mongoose.model('ipa',new mongoose.Schema({
    basecontent:Array,
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
    }
})
);
module.exports.Ipa=Ipa;
