const express=require('express')
const router=express.Router();
const cors=require('cors');
const {test,registerEmployee,loginEmployee} =require('../controllers/authController')

router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:5173'
    })
)

router.get('/',test)
router.post('/registeremployee',registerEmployee)
router.post('/loginemployee',loginEmployee)

module.exports=router