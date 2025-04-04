const mongoose=require('mongoose');

const UserSchema=new  mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
        match: [/^\d{10}$/, "Phone number must be exactly 10 digits"],
    },
    role:{
        type:String,
        enum:['Divyangjan','Caregiver'],
        required:true,
        default:'Divyangjan'

    },
    createAat:{
        type:Date,
        default:Date.now(),

    },
    location:{
        type:{
            type:String,
            enum:["Point"],
            default:"Point",
        },
        coordinates:{
            type:[Number],
            required:true,
        }
    }
});
const User=mongoose.model('User',UserSchema);
module.exports=User;