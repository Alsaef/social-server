const express=require('express');
const commentController=require('../Controller/commentController');
const { verifyJwt } = require('../Token/verifyJwt');
const router=express.Router();

router.route('/').post(verifyJwt,commentController.createComment).get(verifyJwt,commentController.getComment);


module.exports=router