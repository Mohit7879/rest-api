// require express
const express=require('express');

// port
const port=8000;

// fire up express
const app=express();

app.listen(port,(err)=>{
    if(err)
    {
        console.log("error");
    }else{
        console.log("server running successfully");
    }
})
{

}
