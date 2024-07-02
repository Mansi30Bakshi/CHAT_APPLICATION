const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const jwtSecret = process.env.SECRETKEY;
console.log(process.env.MONGO_URL)
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: process.env.CLIENTURL.replace(/\/$/, ''), // Remove trailing slash
}));
app.use(cookieParser());



app.get('/test',(req,res)=>{
   res.send('ok server running');
});


app.get('/profile',(req,res)=>{
  const token = req.cookies?.token;
  if(token){
    jwt.verify(token,jwtSecret,{},(err,userData) =>{
      if(err) throw err;
     //  const {id,username} = userData;
      res.json(userData);
   })
  }
  else{
    res.status(401).json('Sorry No token exsist');
  }
})
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  // Ensure username and password are properly used here
  try {
    const CreatedUser = await User.create({ username, password });
    jwt.sign({userid:CreatedUser._id,username},jwtSecret,{},(err,token) => {
      if(err) throw err;
      res.cookie('token',token).status(201).json({
        id:CreatedUser._id,
      })
    })
    // Handle successful creation
    res.status(201).json('ok');
  } catch (error) {
    // Handle error (e.g., duplicate key error or other validation issues)
    console.error('Failed to create user:', error);
    res.status(400).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});