const express=require('express');
const login=require('../Database');
const Router=express.Router();
Router.get('/Read:_ID',(req,res)=>
{
let Detail=req.params._ID;
    login.login("log","Read",Detail)
    .then((Result)=>
    {
        console.log(Result);
        res.send(Result);
    })
    .catch((err)=>
    {
        console.log(err);
    })
});
//helloo
module.exports=Router;