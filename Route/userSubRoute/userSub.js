const express=require('express');

const userController=require('../../Controller/userController');
const { verify } = require('jsonwebtoken');
const { verifyJwt } = require('../../Token/verifyJwt');
const router=express.Router();
router.route('/').post(userController.createUser).get(verifyJwt,userController.getUser)
router.route('/stack').get(verifyJwt,userController.countUser)
router.route('/:id').get(userController.getUserOnebyId).patch(verifyJwt,userController.updateProfile)

module.exports=router