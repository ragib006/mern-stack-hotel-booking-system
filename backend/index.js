const express = require('express')

const app = express();

const dotenv = require('dotenv')

const connectDB = require('./config/db.js')

const HotelRoutes= require('./routes/hotel.js')

dotenv.config()


connectDB()


app.use(express.json())

//app.get('/hi',(req,res)=>{


//res.send('hello')


//})



app.use('/api/hotel',HotelRoutes)



const PORT = process.env.PORT || 5000



app.listen(PORT,()=>{


console.log(`Server Is Running Port ${process.env.PORT}`)



})