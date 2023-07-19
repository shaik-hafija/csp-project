const express=require('express');
const register=require('../Database')
const Router=express.Router();
Router.post('/Insert',(req,res)=>
{
    let Details=req.body;
    register.register("register","Insert",Details)
    .then((result)=>{
        res.send(result);
        console.log(result);
    })
    .catch((err)=>
    {
        res.send(err);
    })

});
Router.get('/Read:_ID',(req,res)=>
{
    let Details=req.params._ID;
    register.register('register','Read',Details)
    .then((result)=>
    {
        res.send(result);
        console.log(result);
    })
    .catch((err)=>
    {
        console.log(err);
        res.send(err);
    })
});
module.exports=Router;