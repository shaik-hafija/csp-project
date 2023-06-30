const app=require('./requires')
 const port= process.env.PORT || 3000;
app.listen(port,()=>
{
    console.log(`the port listens on localhost:${port}`);
});