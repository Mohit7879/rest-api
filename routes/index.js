const router=require('express').Router();
const mongoose= require('mongoose');
const Developer=require('../modals/developer');

// create developer

router.post("/create",async (req,res)=>{
    try{
        const newdeveloper=await Developer.create(req.body);
        res.status(201).json({message:"success"})
    }
    catch(err)
    {
        res.status(400).json({message:"error"})
    }
})

module.exports=router;