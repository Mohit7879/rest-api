const mongoose=require('mongoose');

const developerschema=new mongoose.Schema({
    name:{
        type:String
        },

        email:{

            type:String,
            required:true,

         },

         password:{

            type:String,
            required:true,
         },

         employed:{

            type:Boolean,
            default:false,
         },
        },

         {
            timestamps: true,
         }

)


module.exports=mongoose.model("Developer",developerschema);