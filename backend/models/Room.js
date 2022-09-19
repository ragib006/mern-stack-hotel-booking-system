const mongoose = require('mongoose')

const RoomSchema = mongoose.Schema({

    title:{

    	type:String,
    	required:true
    },
    price:{

       type:Number,
       required:true

    },

    maxPeople:{

       type:Number,
       required:true

    },
    desc:{

    	type:String,
    	required:true
    },
   
   roomNumbers:[{ number:Number,unavailableDates:{ type:[Date] } }]




         // [
  
          //    {number:101,unavaliableDates:[01.05.2022,02.05.2022]}
          //    {number:102,unavaliableDates:[]}
          //    {number:103,unavaliableDates:[]}
        
  
         //  ]


},{timestamps:true})


    const Room = mongoose.model("Room",RoomSchema)

    module.exports = Room