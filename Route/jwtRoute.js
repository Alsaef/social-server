const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const cors = require('cors');

router.use(cors({
  origin: 'https://social-server-blond.vercel.app'
}));
router.post('/', (req, res) => {
    try {
      const userInfo = req.body;

      const expiration = '7500h';
      const token = jwt.sign(userInfo, process.env.SECURE_TOKEN, {
        expiresIn: expiration
      });
      res.setHeader('Access-Control-Allow-Origin', 'https://social-server-blond.vercel.app');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    //   console.log(token)
      res.json({ token });
    } catch (error) {
      console.error('Error generating token:', error);
      res.status(500).json({ message: 'Token generation failed' });
    }
  });
  
module.exports=router;