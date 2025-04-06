const express = require('express');
const router = express.Router();
const User=require('../models/userModel')


const checkMobile=async(mobile)=>{
    try {
        const user= await User.findOne({mobile});
        if(user.mobile==mobile){
            return !!user; //if user finds 
        }
    } catch (error) {
        return false;
    }
}

router.post("/sign-up",async(req,res)=>{
    try {
        if((await checkMobile(req.body.mobile))){
            return res.json({message:"User Exist please try again with different mobile no"
            });
            
           

        }
        const data=req.body;
        const newUser= new User(data)
        const response= await newUser.save();
        console.log('data saved');
        res.json({response: response})


    } catch (error) {
        console.log(error);
        res.json({error:'Internal Server Error'})
    }
})

//extracting the profiles by role 
router.get("/profile/:role", async (req, res) => {
    try {
        const role = req.params.role;
        const user = await User.findOne({ role: role });

        if (!user) {
            return res.status(404).json({ error: "Candidate not found" });
        }

        // Flattening location into latitude and longitude
        const flatUser = {
            _id: user._id,
            name: user.name,
            mobile: user.mobile,
            role: user.role,
            createAat: user.createAat,
            latitudeas: user.location.coordinates[0],  // Assuming [lat, lng]
            longitude: user.location.coordinates[1]
        };
        console.log(flatUser);
        res.json(flatUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//route to link divyang jan 
router.post("/assign-care-giver-by-mobile", async (req, res) => {
    try {
        const { careMobile, divyangMobile } = req.body;

        // get caregiver
        const caregiver = await User.findOne({ mobile: careMobile });
        if (!caregiver || caregiver.role !== 'Caregiver') {
            return res.json({ error: "Invalid Caregiver Mobile or Role" });
        }

        // get divyang
        const divyang = await User.findOne({ mobile: divyangMobile });
        if (!divyang || divyang.role !== 'Divyangjan') {
            return res.json({ error: "Invalid Divyangjan Mobile or Role" });
        }

        // check if already assigned
        if (divyang.caregiverAssigned.includes(caregiver._id)) {
            return res.json({ message: "Caregiver already assigned to this Divyangjan" });
        }

        // assign caregiver
        divyang.caregiverAssigned.push(caregiver._id);
        await divyang.save();

        res.json({ message: "Caregiver successfully assigned to Divyangjan", divyang });
    } catch (error) {
        console.log(error);
        res.json({ error: "Internal Server Error" });
    }
});


module.exports = router;