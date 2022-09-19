
const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware.js')

const {deleteAdmin,getallAdmin,AlluserAllhotelAllorder,AdminRegister,AdminLogin,createHotel,updateHotel,deleteHotel,getallHotel,viewHotel,UserRegister,UserLogin,createRoom,updateRoom,deleteRoom,viewRoom,getallRoom,HotelCountByCity,HotelCountByType,HotelSearch,HotelSearchMaxandMinprice,RegexHotelSearch,getSpecificHotelallRoom,HorelReserveroom,GetallUser,Deleteuser,orderHotel,GetallOrder,viewOrder,Takeorder,OrderstatusSuccess,Deleteorder} =  require('../controllers/Hotelcontroller.js')

//localhost:5000/api/hotel/hi
//router.get('/hi',(req,res)=>{


//res.send('hello')


//})


//localhost:5000/api/hotel/createhotel
router.post('/createhotel',createHotel)
//localhost:5000/api/hotel/updatehotel/:id
router.put('/updatehotel/:id',updateHotel)
//localhost:5000/api/hotel/deletehotel/:id
router.delete('/deletehotel/:id',deleteHotel)
//localhost:5000/api/hotel/getallhotel
router.get('/getallhotel',getallHotel)
//localhost:5000/api/hotel/viewhotel/:id
router.get('/viewhotel/:id',viewHotel)


//localhost:5000/api/hotel/register
router.post('/register',UserRegister)
//localhost:5000/api/hotel/login
router.post('/login',UserLogin)




//register admin  
//localhost:5000/api/hotel/adminregister
router.post('/adminregister',AdminRegister)

//login user   AdminLogin
//localhost:5000/api/hotel/adminlogin
router.post('/adminlogin',AdminLogin)






//getallUser
//localhost:5000/api/hotel/getalluser
router.get('/getalluser',GetallUser)

//localhost:5000/api/hotel/createroom/:hotelid
router.post('/createroom/:hotelid',createRoom)
//localhost:5000/api/hotel/updatehotel/:id
router.put('/updateroom/:id',protect,updateRoom)
//localhost:5000/api/hotel/deleteroom/:id/:hotelid
router.delete('/deleteroom/:id/:hotelid',deleteRoom)
//localhost:5000/api/hotel/getallroom
router.get('/getallroom',getallRoom)
//localhost:5000/api/hotel/viewroom/:id
router.get('/viewroom/:id',protect,viewRoom)

//Deleteuser

//localhost:5000/api/hotel/deleteuser/:id
router.delete('/deleteuser/:id',Deleteuser)



//localhost:5000/api/hotel/hotelsearch?city=Dhaha
router.get('/hotelsearch',HotelSearch)


//localhost:5000/api/hotel/hotelsearchmaxandminprice?city=Dhaha&min=40&max=100
router.get('/hotelsearchmaxandminprice',HotelSearchMaxandMinprice)





//RegexHotelSearch
//localhost:5000/api/hotel/regexhotelsearch?search=ragib
router.get('/regexhotelsearch',RegexHotelSearch)






//HotelCountByCity
//localhost:5000/api/hotel/hotelcountbycity?cities='pokhra','nepal','Dhaka'
router.get('/hotelcountbycity',HotelCountByCity)


//hotelcountbytype
//localhost:5000/api/hotel/hotelcountbytype
router.get('/hotelcountbytype',HotelCountByType)

//SearchHotelByCity
//localhost:5000/api/hotel/hotelsearchbycity?city=Pokhra





router.put('/reserveroom/:id',HorelReserveroom)





//getSpecificHotelallRoom
//localhost:5000/api/hotel/getspecifichotelallroom/:id
                                                   //hotelid
router.get('/getspecifichotelallroom/:id',getSpecificHotelallRoom)
                                  //hotelid

//orderHotel

//localhost:5000/api/hotel/orderhotel








router.post('/orderhotel',orderHotel)





//Deleteorder


//localhost:5000/api/hotel/deleteorder/:id

router.delete('/deleteorder/:id',Deleteorder)








//GetallOrder
//localhost:5000/api/hotel/get_all_order_hotel
router.get('/get_all_order_hotel',GetallOrder)

//viewOrder

router.get('/view_order/:id',viewOrder)
//router.get('/hotelsearchbycity',SearchHotelByCity)



//takeorder   
//localhost:5000/api/hotel/take_order/:id
                                     //soto gula room select korsa ter id
router.put('/take_order/:id',Takeorder)

//OrderstatusSuccess

//localhost:5000/api/hotel/order_ststus_success/:id
                                      //order id
router.put('/order_ststus_success/:id',OrderstatusSuccess)

//Reserveroom

//AlluserAllhotelAllorder


//localhost:5000/api/hotel/alluserallhotelallorder

router.get('/alluserallhotelallorder',AlluserAllhotelAllorder)


//getallAdmin

//localhost:5000/api/hotel/getalladmin

router.get('/getalladmin',getallAdmin)

//deleteAdmin


//localhost:5000/api/hotel/deleteadmin/:id
router.delete('/deleteadmin/:id',deleteAdmin)

//localhost:5000/api/hotel/reserveroom/:id
                                     //room number id       room id na
//router.put('/reserveroom/:id',Reserveroom)






module.exports = router
