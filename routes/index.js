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


// get all developer

router.get('/all',async(req,res)=>{
    try{
        const all=await Developer.find();
        res.status(201).json({message:"success"})
    }
    catch(err){
        res.status(400).json({message:"error"})
    }
})


//  get only one developer

router.get("/:id" , async(req,res)=>{
    try{
    const one=await Developer.findById(req.params.id);
    res.status(201).json({message:"success"})
    }
    catch(err)
    {
        res.status(400).json({message:"error"})
    }
})

// update a developer

router.get("/update", async(req,res)=>{
    try{

        const{id:_id}= await req.params;
        const{changes}= await req.body;
        const updatedeveloper=await Developer.findByIdAndUpdate(...changes,_id);
        res.status(201).json({message:"success"})
    }
    catch(err)
    {
        res.status(400).json({message:"error"})
    }
})

router.get("/delete", async(req,res)=>{
    try{

        const{id:_id}= await req.params;
      //  const{changes}= await req.body;
        const deletedeveloper=await Developer.findByIdAndDelete(_id);
        res.status(201).json({message:"success"})
    }
    catch(err)
    {
        res.status(400).json({message:"error"})
    }
})

module.exports=router;