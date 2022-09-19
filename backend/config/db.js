const mongoose = require('mongoose')

const connectDB = async () => { 

try{

const connect  = await mongoose.connect(process.env.MONGO_URI,{

           useUnifiedTopology:true,
           useNewUrlParser:true


})


console.log('Mongodb Connect Successfully')



}catch(error){


   console.log(error)


}





}



module.exports = connectDB