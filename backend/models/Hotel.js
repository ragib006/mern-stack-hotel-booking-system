const mongoose = require('mongoose')

const HotelSchema = mongoose.Schema({

    name:{

    	type:String,
    //	required:true
    },
    type:{

       type:String,
     //  required:true

    },
    city:{

    	type:String,
    //	required:true
    },
    address:{

    	type:String,
    //	required:true
    },
    distance:{
    	type:String,
    
    },

    photos:{

    	type:[String]
    },

    desc:{

    	type:String,
    	//required:true

    },
    rating:{
    	type:Number,
    	min:0,
    	max:5
    },
    rooms:{

    	type:[String]
    },
    
    chepestPrice:{

    	type:Number,
    	//required:true
    },

    title:{

    	type:String,
    	//required:true
    },

    featured:{

    	type:String,
    	default:false
    }








},{timestamps:true})


    const Hotel = mongoose.model("Hotel",HotelSchema)

    module.exports = Hotel