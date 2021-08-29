import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import  jwt  from 'jsonwebtoken';
import fs from 'fs';
import routep from './routes/posts.js';
import dotenv from 'dotenv';
dotenv.config();
const app=express();
app.use(bodyParser.json({exteneded:true,limit:"30mb"}));
app.use(bodyParser.urlencoded({extended:true,limit:"30mb"}));
app.use(cors());
//routess
app.use('/post',routep);
//set port
const PORT=process.env.PORT||5000;
//database url
// consCONNECTION_URL="mongodb://127.0.0.1:27017/admin";
// var url="";
const dbconnect=mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
if(!err){
    console.log('db connected succesfull');
}else{
    console.log('connection aborted'+err);
}
});
mongoose.set('useFindAndModify',false);
// app.get('/',(req,res)=>{
//   res.send('welcome to node apis');
// });
// app.get('/scret',isAuthenticated,(req,res)=>{
//   res.json({'message':'secret key'});
// });
// app.get('/readme',(req,res)=>{
// res.json({"text":"here i am"});
// });
// app.get('/jwt',(req,res)=>{
//    let privateKey=fs.readFileSync('./private.pem','utf8');
//    let toke= jwt.sign({"body":"stuff"},privateKey, { algorithm:"HS256"});
//    res.json(toke);
// });
// function isAuthenticated(req,res,next){
//     if (typeof req.headers.authorization !=="undefined") {
    
//     let token=req.headers.authorization.split(' ')[1];
//     let privateKey=fs.readFileSync('./private.pem','utf8');
//     jwt.verify(token,privateKey,{algorithm:"HS256"},(err,decode)=>{
//     if (err) {
//         res.status(500).json({'err':"not authorized"});
//     }
//     console.log(decode);
//     return next();
//     });
// }else{
//     res.status(500).json({error:"Not Authorized"});
// }
// }
app.listen(PORT,()=>{
    console.log(`server stated at port ${PORT}`);
});