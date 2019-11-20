const express=require('express');
const app=express();
const mongoose=require('mongoose');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.json());
 
  mongoose.connect('mongodb://localhost/users')
  .then(()=>console.log('connected to mongoDB...'))
  .catch(err=>console.log());

  app.get('/',(req,res)=>{
       
      res.send('hello world');
  });


  const Register=mongoose.model('Register',new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phnum:{
        type:String
    }
}));

const User=mongoose.model('users',new mongoose.Schema({
  name:String,
  password:String
}));

app.get('/users',async(req,res)=>{

   let UserList=await User.find();
   console.log(UserList);
   res.send(UserList);
  
});




  const port=process.env.PORT || 3000;
  app.listen(port,()=>{
      console.log('Listing');
  });
