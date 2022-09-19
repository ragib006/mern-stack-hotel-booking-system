const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({

    username:{

    	type:String,
    	required:true
    },
    email:{

       type:String,
       required:true
   },


      hotelid:{

       type:String,
       required:true
   },


      hotelname:{

       type:String,
       required:true
   },


       totalroom:{

        type:String,
 //      required:true
    },


  // tnxId:{

  //     type:String,
 //      required:true
 //  },

      paymentstatus:{

        type:Boolean,
        default:false
   },


     orderstatus:{

        type:Boolean,
        default:false
   },


    
   rooms:{

      type:[String]
    },
  

     date:{

   //    type:String,
   //    required:true


      type:[Date]
   },

   




         // [
  
          //    {number:101,unavaliableDates:[01.05.2022,02.05.2022]}
          //    {number:102,unavaliableDates:[]}
          //    {number:103,unavaliableDates:[]}
        
  
         //  ]


},{timestamps:true})


    const Order = mongoose.model("Order",OrderSchema)

    module.exports = Order