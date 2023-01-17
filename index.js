const express = require('express')
const app = express()
// const mongoose=require("mongoose");
const connect=require("./connection/connect");
connect();
const Blog=require("./model/blog");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/blog",async (req,res)=>{
    try{
        const {page=1,search="",pageCount=5}=req.query;
        const requestedBlog= await Blog.find({topic:search}).skip((page-1)*pageCount).limit(pageCount);
        res.status(200).json({
            status:"success",
            requestedBlog
        })
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
    
     
})

app.post("/blog",async (req,res)=>{
    try{
       const blog= await Blog.create(req.body);
       res.status(200).json({
        status:"success",
        blog
       })
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
           })
    }
})

app.put("/blog/:id", async(req,res)=>{
try{
    const updatedData=await Blog.updateOne({_id:req.params.id},req.body);
    const data=await Blog.find({_id:req.params.id});
    res.status(200).json({
        status:"success",
        data
    })
}
catch(e){
     res.status(400).json({
        status:"failed",
        message:e.message
     })   
}
})

app.delete("/blog/:id", async(req,res)=>{
    try{
        const deleteBlog=await Blog.deleteOne({_id:req.params.id});
        res.status(200).json({
            status:"Success",
            deleteBlog
            
         })  
    }
    catch(e){
         res.status(400).json({
            status:"failed",
            message:e.message
         })   
    }
    })




app.listen(3000,()=>{console.log("Server is up.....")})