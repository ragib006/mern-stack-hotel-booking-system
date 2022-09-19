const asyncHandler = require('express-async-handler')
//const User = require('../models/authModel')
const Hotel = require('../models/Hotel.js')

const User = require('../models/Auth.js')

const Room = require('../models/Room.js')

const Order = require('../models/Order.js')

const Admin = require('../models/Admin.js')



const bcrypt = require('bcryptjs');

const generateToken = require("../config/generateToken")





//const generateToken = require("../config/generateToken")
//const cloudinary = require('cloudinary')
//module.exports.

//create hotel
//localhost:5000/api/hotel/createhotel
const createHotel = asyncHandler(async(req,res)=>{
          
      const newHotel = new Hotel(req.body)

      try{

          const saveHotel = await newHotel.save();

          res.status(200).json(saveHotel)


      }catch(error){

         res.status(404).json(error)

      }

})

//update hotel
//localhost:5000/api/hotel/updatehotel/:id

const updateHotel = asyncHandler(async(req,res)=>{
          

      try{

          const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});

          res.status(200).json(updateHotel)


      }catch(error){

         res.status(404).json(error)

      }

})


//delete hotel
//localhost:5000/api/hotel/deletehotel/:id

const deleteHotel = asyncHandler(async(req,res)=>{
          

      try{

       await Hotel.findByIdAndDelete(req.params.id);

          res.status(200).json('hotel Delete SuccessFully')


      }catch(error){

         res.status(404).json(error)

      }

})


//getall hotel
//localhost:5000/api/hotel/getallhotel


const getallHotel = asyncHandler(async(req,res)=>{
          

      try{

          const getallhotel = await Hotel.find();

          res.status(200).json(getallhotel)


      }catch(error){

         res.status(404).json(error)

      }

})


//viewHotel
//localhost:5000/api/hotel/viewhotel/:id

const viewHotel = asyncHandler(async(req,res)=>{
          

      try{

       const hotel = await Hotel.findById(req.params.id);

          res.status(200).json(hotel)


      }catch(error){

         res.status(404).json(error)

      }

})



//register user   
//localhost:5000/api/hotel/register


const UserRegister = asyncHandler(async(req,res)=>{
          

      try{


            const userExists = await User.findOne({email:req.body.email})

            if(userExists){
             
              res.status(400).json({message:'User Already Exist'})

            }else{


                                
                      const salt = bcrypt.genSaltSync(10);
                      const hash = bcrypt.hashSync(req.body.password, salt);

                      const newUser = new User({

                        username:req.body.username,
                        email:req.body.email,
                        image:req.body.image,
                        password:hash


                        })


                       const user = await newUser.save();

          
                      if(user){

                             res.json({

                             _id:user._id,
                             username:user.username,
                             email:user.email,
                             image:user.image,
                             isAdmin:user.isAdmin,
                             token:generateToken(user._id)


                             })

                         }else{

               
                           res.status(404).json('User Not create')


                             }

                    }




      }catch(error){

         res.status(404).json(error)

      }

})



//login user   
//localhost:5000/api/hotel/login

const UserLogin = asyncHandler(async(req,res)=>{
          

      try{


            const Findemail = await User.findOne({email:req.body.email})

            if(!Findemail){

                  res.status(404).json('User Does Not Exist')
            }else{

              //comparepassword   
              const comparepassword = await bcrypt.compare(req.body.password, Findemail.password)
       
                     if(comparepassword){


                       res.json({

                               _id:Findemail._id,
                               username:Findemail.username,
                               email:Findemail.email,
                               admin:Findemail.image,
                               isAdmin:Findemail.isAdmin,
                               token:generateToken(Findemail._id)

                      })

                     
                       }else{

                           res.status(404).json('Invalid Email or Password')
                      }

            }

      }catch(error){

         res.status(404).json(error)

      }

})


//createroom   
//localhost:5000/api/hotel/createroom


const createRoom = asyncHandler(async(req,res)=>{
          
      
      try{

          const hotelId = req.params.hotelid;
          const newRoom = new Room(req.body)

          
          const savedRoom = await newRoom.save()

          await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})

          res.status(200).json(savedRoom)


      }catch(error){

         res.status(404).json(error)

      }

})


//update room


const updateRoom = asyncHandler(async(req,res)=>{
          

      try{

          const updateHotel = await Room.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});

          res.status(200).json(updateHotel)


      }catch(error){

         res.status(404).json(error)

      }

})

//delete room
//localhost:5000/api/hotel/deleteroom/:id

const deleteRoom = asyncHandler(async(req,res)=>{
          

      try{
         const hotelId = req.params.hotelid;

       await Room.findByIdAndDelete(req.params.id);

        await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})

          res.status(200).json('Room Delete SuccessFully')


      }catch(error){

         res.status(404).json(error)

      }

})


//viewRoom
//localhost:5000/api/hotel/viewroom/:id

const viewRoom = asyncHandler(async(req,res)=>{
          

      try{

       const room = await Room.findById(req.params.id);

          res.status(200).json(room)


      }catch(error){

         res.status(404).json(error)

      }

})

//getallroom
//localhost:5000/api/hotel/getallroom

const getallRoom = asyncHandler(async(req,res)=>{
          

      try{

       const room = await Room.find();

          res.status(200).json(room)


      }catch(error){

         res.status(404).json(error)

      }

})



//Hotelcount by city
//localhost:5000/api/hotel/hotelcountbycity?cities=pokhra,nepal,Dhaka


const HotelCountByCity = asyncHandler(async(req,res)=>{
          

       const cities = req.query.cities.split(",")

                                       //split pokhra,nepal,Dhaka k array te porinoto korbe

      try{

       
       const list = await Promise.all(cities.map(city=>{

         
         return Hotel.countDocuments({city:city})
 

       }))


     //  console.log(cities)

         res.status(200).json(list)


      }catch(error){

         res.status(404).json(error)

      }

})




//Hotelcount by type
//localhost:5000/api/hotel/hotelcountbytype


const HotelCountByType = asyncHandler(async(req,res)=>{
          

     //  const cities = req.query.cities.split(",")

      try{

    
    const hotel = await Hotel.countDocuments({type:"Hotel"})
    const apartment = await Hotel.countDocuments({type:"Apartment"})
    const resort = await Hotel.countDocuments({type:"Resort"})
    const villa = await Hotel.countDocuments({type:"Villa"})
    const cabin = await Hotel.countDocuments({type:"Cabin"})
    const lounge = await Hotel.countDocuments({type:"Lounge"})

         res.status(200).json([

                
             {type:"Hotel",count:hotel},

             {type:"Apartment",count:apartment},

             {type:"Resort",count:resort},

             {type:"Villa",count:villa},

             {type:"Cabin",count:cabin},

             {type:"Lounge",count:lounge}


          ])


      }catch(error){

         res.status(404).json(error)

      }

})













const HotelSearch = asyncHandler(async(req,res)=>{
          

    


    //const {min,max, ...others} = req.query

      try{
       
           // const hotel = await Hotel.find({...others,chepestPrice: {$gt:min,$lt:max}})  


       const hotel = await Hotel.find(req.query)  

     //  console.log(cities)

         res.status(200).json({len:hotel})


      }catch(error){

         res.status(404).json(error)

      }

})



//regex search by hotel



//localhost:5000/api/hotel/hotelsearchmaxandminprice?city=Dhaha&min=40&max=100
const HotelSearchMaxandMinprice = asyncHandler(async(req,res)=>{
          

    const {min,max, ...others} = req.query

      try{
       
            const hotel = await Hotel.find({...others,chepestPrice: {$gt:min || 1,$lt:max || 1000}})  


      // const hotel = await Hotel.find(req.query)  

     //  console.log(cities)

         res.status(200).json({len:hotel})


      }catch(error){

         res.status(404).json(error)

      }

})












//search user  
//localhost:5000/api/user/searchuser?search=ragib

//localhost:5000/api/hotel/regexhotelsearch?search=ragib
const RegexHotelSearch = asyncHandler(async (req,res) => { 



try{


     const keyword = req.query.search ? {


        //regex pattren match kore
    $or: [

       { city: { $regex:req.query.search, $options: "i"}},
       { name: { $regex:req.query.search, $options: "i"}},

    ]


    } : {}
   
  const users = await Hotel.find(keyword)


  res.status(200).json({search:users})


//res.status(200).json({mu:'heool'})




}catch(error){



   console.log(error)

}

      


//.find({ _id: {$ne: req.user._id} })

//res.send(users)
//setTimeout(()=> {

 //  res.json(
 //     users
//   )

//},1000)


})



//getSpecificHotelallRoom


//localhost:5000/api/hotel/getspecifichotelallroom/:id
                                                  //hotelid


const getSpecificHotelallRoom = asyncHandler(async(req,res)=>{
          



      try{
       
      const hotel = await Hotel.findById(req.params.id)  

      const list  = await Promise.all(hotel.rooms.map((room)=>{

          return Room.findById(room);

      }))

        res.status(200).json(list)


      }catch(error){

         res.status(404).json(error)

      }

})








const HorelReserveroom = asyncHandler(async(req,res)=>{
          



      try{
       
     // const hotel = await Hotel.findById(req.params.id)  

     // const list  = await Promise.all(hotel.rooms.map((room)=>{

        //  return Room.findById(room);

     // }))


      await Room.updateOne({"roomNumbers._id":req.params.id},{

            $push:{

               "roomNumbers.$.unavailableDates":req.body.date

            }
           

      })



        res.status(200).json('SuccessFully Update')


      }catch(error){

         res.status(404).json(error)

      }

})




//
const GetallUser = asyncHandler(async(req,res)=>{
          

      try{

          const getalluser = await User.find();

          res.status(200).json(getalluser)


      }catch(error){

         res.status(404).json(error)

      }

})


////delete room
//localhost:5000/api/hotel/deleteroom/:id

const Deleteuser = asyncHandler(async(req,res)=>{
          

    
      try{

       await User.findByIdAndDelete(req.params.id);

          res.status(200).json('User Delete SuccessFully')


      }catch(error){

         res.status(404).json(error)

      }

})





//create hotel
//localhost:5000/api/hotel/createhotel





const orderHotel = asyncHandler(async(req,res)=>{
          
      const newOrder = new Order(req.body)

      try{

          const saveHotel = await newOrder.save();

          res.status(200).json(saveHotel)


      }catch(error){

         res.status(404).json(error)

      }

})














//all_order
//localhost:5000/api/hotel/all_order

//localhost:5000/api/hotel/get_all_order_hotel
const GetallOrder = asyncHandler(async(req,res)=>{
          

      try{

          const getallorder = await Order.find();

          res.status(200).json(getallorder)


      }catch(error){

         res.status(404).json(error)

      }

})







//viewRoom
//localhost:5000/api/hotel/vieworder/:id

const viewOrder = asyncHandler(async(req,res)=>{
          

      try{

       const order = await Order.findById(req.params.id);

          res.status(200).json(order)


      }catch(error){

         res.status(404).json(error)

      }

})







////delete room
//localhost:5000/api/hotel/deleteorder/:id

const Deleteorder = asyncHandler(async(req,res)=>{
          

    
      try{

       await Order.findByIdAndDelete(req.params.id);

          res.status(200).json('Order Delete SuccessFully')


      }catch(error){

         res.status(404).json(error)

      }

})













//take order


const Takeorder = asyncHandler(async(req,res)=>{
          



      try{
       
     // const hotel = await Hotel.findById(req.params.id)  

     // const list  = await Promise.all(hotel.rooms.map((room)=>{

        //  return Room.findById(room);

     // }))


      await Room.updateOne({"roomNumbers._id":req.params.id},{

            $push:{

               "roomNumbers.$.unavailableDates":req.body.date

            }
           

      })



    //  await Order.updateOne({"orderstatus":false})



        res.status(200).json('SuccessFully Update')


      }catch(error){

         res.status(404).json(error)

      }

})







const OrderstatusSuccess = asyncHandler(async(req,res)=>{
          

      try{

          const orderstatus = await Order.findByIdAndUpdate(req.params.id, {$set:{ orderstatus: true }},{new:true});

          res.status(200).json(orderstatus)


      }catch(error){

         res.status(404).json(error)

      }

})





const PaymentstatusSuccess = asyncHandler(async(req,res)=>{
          

      try{

          const paymentstatus = await Order.findByIdAndUpdate(req.params.id, {$set:{ paymentstatus: true }},{new:true});

          res.status(200).json(paymentstatus)


      }catch(error){

         res.status(404).json(error)

      }

})








//register admin  
//localhost:5000/api/hotel/adminregister


const AdminRegister = asyncHandler(async(req,res)=>{
          

      try{


            const userExists = await Admin.findOne({email:req.body.email})

            if(userExists){
             
              res.status(400).json({message:'Admin Already Exist'})

            }else{


                                
                      const salt = bcrypt.genSaltSync(10);
                      const hash = bcrypt.hashSync(req.body.password, salt);

                      const newUser = new Admin({

                        username:req.body.username,
                        email:req.body.email,
                        image:req.body.image,
                        password:hash


                        })


                       const user = await newUser.save();

          
                      if(user){

                             res.json({

                             _id:user._id,
                             username:user.username,
                             email:user.email,
                             image:user.image,
                             isAdmin:user.isAdmin,
                             token:generateToken(user._id)


                             })

                         }else{

               
                           res.status(404).json('Admin Not create')


                             }

                    }




      }catch(error){

         res.status(404).json(error)

      }

})








//login user   
//localhost:5000/api/hotel/adminlogin

const AdminLogin = asyncHandler(async(req,res)=>{
          

      try{


            const Findemail = await Admin.findOne({email:req.body.email})

            if(!Findemail){

                  res.status(404).json('Admin Does Not Exist')
            }else{

              //comparepassword   
              const comparepassword = await bcrypt.compare(req.body.password, Findemail.password)
       
                     if(comparepassword){


                       res.json({

                               _id:Findemail._id,
                               username:Findemail.username,
                               email:Findemail.email,
                               image:Findemail.image,
                               isAdmin:Findemail.isAdmin,
                               token:generateToken(Findemail._id)

                      })

                     
                       }else{

                           res.status(404).json('Invalid Email or Password')
                      }

            }

      }catch(error){

         res.status(404).json(error)

      }

})





const AlluserAllhotelAllorder = asyncHandler(async(req,res)=>{
          

    


    //const {min,max, ...others} = req.query

      try{
       
           // const hotel = await Hotel.find({...others,chepestPrice: {$gt:min,$lt:max}})  


       //const hotel = await Hotel.find(req.query)  

     //  console.log(cities)


         const hotel = await Hotel.countDocuments()
         const user = await User.countDocuments()
         const order = await Order.countDocuments()

         res.status(200).json({
                  
                    allhotel:hotel,
                    alluser:user,
                    allorder:order,

        })


      }catch(error){

         res.status(404).json(error)

      }

})





//getall hotel
//localhost:5000/api/hotel/getalladmin


const getallAdmin = asyncHandler(async(req,res)=>{
          

      try{

          const getalladmin = await Admin.find();

          res.status(200).json(getalladmin)


      }catch(error){

         res.status(404).json(error)

      }

})



//delete hotel
//localhost:5000/api/hotel/deleteadmin/:id

const deleteAdmin = asyncHandler(async(req,res)=>{
          

      try{

       await Admin.findByIdAndDelete(req.params.id);

          res.status(200).json('Admin Delete SuccessFully')


      }catch(error){

         res.status(404).json(error)

      }

})



module.exports = {deleteAdmin,getallAdmin,AlluserAllhotelAllorder,AdminRegister,AdminLogin,createHotel,updateHotel,deleteHotel,getallHotel,viewHotel,UserRegister,UserLogin,UserLogin,createRoom,updateRoom,deleteRoom,viewRoom,getallRoom,HotelCountByCity,HotelCountByType,HotelSearch,HotelSearchMaxandMinprice,RegexHotelSearch,getSpecificHotelallRoom,HorelReserveroom,GetallUser,Deleteuser,orderHotel,Deleteorder,GetallOrder,viewOrder,Takeorder,OrderstatusSuccess}






