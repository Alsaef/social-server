const express = require('express')
const app = express()
const cors=require('cors')
const mongoose = require('mongoose');
const port =process.env.PORT || 3000
require('dotenv').config()
app.use(express.json())
app.use(cors({
  origin: '*' // Specify the allowed origin here, or '*' to allow all origins
}));
// DB Connection

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('DataBase Connected')
})


const userRouter=require('./Route/userRoute')
const userSub=require('./Route/userSubRoute/userSub')
const postRouter=require('./Route/postRoute')
const commentRoute=require('./Route/commentRoute')
const likeRoute=require('./Route/likeRoute')
const jwtRoute=require('./Route/jwtRoute')

app.use('/api/v1/user',userRouter)
app.use('/api/v1/users',userSub)
app.use('/api/v1/post',postRouter)
app.use('/api/v1/comment',commentRoute)
app.use('/api/v1/like',likeRoute)
app.post('/api/v1/jwt',(req,res)=>{})

app.get('/', (req, res) => {
  res.send('Server Running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})