const express=require('express')
const keyword=require('../models/KeywordModel');
const router=require('router');
const User = require('../models/userModel');

//mobile no
router.post('/set-keyword/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const { keyword } = req.body;

        const user = await User.findOne({ _id: id });

        if (!user) return res.status(404).json({ message: "User not found" });

        let existingKeyword = await Keyword.findOne({ user: user._id });

        if (existingKeyword) {
            existingKeyword.keyword.push(keyword);
            await existingKeyword.save();
        } else {
            existingKeyword = new Keyword({
                user: user._id,
                keyword: [keyword],
            });
            await existingKeyword.save();
        }

        res.status(200).json({ message: "Keyword added successfully", data: existingKeyword });

    } catch (error) {
        console.log(error);
        return res.json({error:error});
    }
})

router.delete('/remove-keyword',async(req,res)=>{
    try {

        const{id,keyword}=req.body;
        const user=await user.findOne({_id:id});
        if(!user){
            return res.json({message: "user not found"});
        }

        const keyworDoc=await keyword.findOne({user:user._id});
        if(!keyworDoc){
            return res.json({message:"keyword doc not found"});
        }

        keyworDoc.keyword=keyworDoc.keyword.filter


        
    } catch (error) {
        
    }
})

 
router.get("/fetch-keyword",async(req,res)=>{
    try {

        const userid=req.body;
        const user=await user.findById()
        
    } catch (error) {
        console.log(error);
        res.json({message:"Internal server error",})
    }
})

