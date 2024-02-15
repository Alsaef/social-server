const express=require('express');
const postController=require('../Controller/postController');
const { verifyJwt } = require('../Token/verifyJwt');
const router=express.Router();

router.route('/').post(verifyJwt,postController.createPost).get(verifyJwt,postController.getUser);
router.route('/search').get(verifyJwt,postController.postSearch);
router.route('/:id').get(postController.getPostbyOne).delete(verifyJwt,postController.deletePost)

module.exports=router