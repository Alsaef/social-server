const express=require('express');

const userController=require('../Controller/userController');
const router=express.Router();


router.route('/:email').get(userController.getUserOne)


module.exports=router