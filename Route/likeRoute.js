const express=require('express')
const likeControler=require('../Controller/likeControler');
const { verifyJwt } = require('../Token/verifyJwt');
const router=express.Router();

router.route('/').post(verifyJwt,likeControler.createLike).get(verifyJwt,likeControler.getLikes);
router.route('/:id').get().delete(verifyJwt,likeControler.deleteLike);

module.exports=router