const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({

    username:{

    	type:String,
    	required:true
    },

    email:{

       type:String,
       required:true

    },


     image:{
        type:String,

     // required:true
      
      //  default:"https://res.cloudinary.com/ragibhasan006/image/upload/v1617109096/aloiae2hbmx2bsrkhq0a.jpg"

     },


    password:{

    	type:String,
    	required:true
    },

    isAdmin:{

    	type:Boolean,
    	default:true
    },

   









},{timestamps:true})


    const User = mongoose.model("Admin",AdminSchema)

    module.exports = User