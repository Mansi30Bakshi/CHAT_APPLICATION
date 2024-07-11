// Web Socket Complete

// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import { WebSocketServer } from 'ws';
// import cookieParser from 'cookie-parser';
// import cookie from 'cookie';
// import jwt from 'jsonwebtoken'; // Assuming you use JWT for token generation

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// const corsOptions = {
//   origin: 'http://localhost:5173', // Update this to your client's origin
//   credentials: true, // Allow credentials
// };

// app.use(cors(corsOptions));

// const jwtSecret = "jwijdi2hu27673789430-49887585ui0tikirfgh37290-";

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/ChatAppMern');
//     console.log('Database connected');
//   } catch (error) {
//     console.error('Database connection error:', error);
//     process.exit(1); // Exit the process with failure
//   }
// };

// connectDB();

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send({ message: 'User already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();
//     res.send({ success: true, message: 'Successfully Registered' });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       const passwordMatch = await bcrypt.compare(password, user.password);
//       if (passwordMatch) {
//         const token = jwt.sign({ userId: user._id ,username: user.name}, jwtSecret); // Use the correct secret
//         res.cookie('token', token, { httpOnly: true }); // Set token as HTTP-only cookie
//         res.send({ success: true, message: 'Login Successful', user: user });
//       } else {
//         res.send({ success: false, message: 'Password didn\'t match' });
//       }
//     } else {
//       res.send({ message: 'User not registered' });
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// const port = 5001;
// const server = app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// const wss = new WebSocketServer({ server });

// wss.on('connection', (connection, req) => {
//   const cookies = req.headers.cookie;
//   if (cookies) {
//     const parsedCookies = cookie.parse(cookies);
//     const token = parsedCookies.token;
//     console.log(`Parsed Token: ${token}`); // Log the parsed token

//     jwt.verify(token, jwtSecret, {}, (err, userData) => {
//       console.log(`Before verification: ${JSON.stringify(parsedCookies)}`); // Log before verification
//       if (err) {
//         console.error('JWT verification error:', err);
//         connection.send(JSON.stringify({ success: false, message: 'Invalid token' }));
//         connection.close();
//         return;
//       }
//       console.log(userData); // Successfully print userData
//       const {userid,username} = userData;
//       connection.userid = userid;
//       connection.username = username;

//       // Example: Sending a welcome message to the client
//       connection.send(JSON.stringify({ success: true, message: 'Connection established', userData }));
//     });
//   } else {
//     console.log('No cookies found');
//     connection.send(JSON.stringify({ success: false, message: 'No token provided' }));
//     connection.close();
//   }

//   connection.on('message', (message) => {
//     console.log(`Received: ${message}`);
//     // Process the message
//   });
// });




// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import { WebSocketServer } from 'ws';
// import cookieParser from 'cookie-parser';
// import cookie from 'cookie';
// import jwt from 'jsonwebtoken'; // Assuming you use JWT for token generation

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// const corsOptions = {
//   origin: 'http://localhost:5173', // Update this to your client's origin
//   credentials: true, // Allow credentials
// };

// app.use(cors(corsOptions));

// const jwtSecret = "jwijdi2hu27673789430-49887585ui0tikirfgh37290-";

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/ChatAppMern');
//     console.log('Database connected');
//   } catch (error) {
//     console.error('Database connection error:', error);
//     process.exit(1); // Exit the process with failure
//   }
// };

// connectDB();

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send({ message: 'User already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();
//     res.send({ success: true, message: 'Successfully Registered' });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       const passwordMatch = await bcrypt.compare(password, user.password);
//       if (passwordMatch) {
//         const token = jwt.sign({ userId: user._id ,username: user.name}, jwtSecret); // Use the correct secret
//         res.cookie('token', token, { httpOnly: true }); // Set token as HTTP-only cookie
//         res.send({ success: true, message: 'Login Successful', user: user });
//       } else {
//         res.send({ success: false, message: 'Password didn\'t match' });
//       }
//     } else {
//       res.send({ message: 'User not registered' });
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// const port = 5001;
// const server = app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// const wss = new WebSocketServer({ server });

// wss.on('connection', (connection, req) => {
//   const cookies = req.headers.cookie;
//   if (cookies) {
//     const parsedCookies = cookie.parse(cookies);
//     const token = parsedCookies.token;
//     console.log(`Parsed Token: ${token}`); // Log the parsed token

//     jwt.verify(token, jwtSecret, {}, (err, userData) => {
//       console.log(`Before verification: ${JSON.stringify(parsedCookies)}`); // Log before verification
//       if (err) {
//         console.error('JWT verification error:', err);
//         connection.send(JSON.stringify({ success: false, message: 'Invalid token' }));
//         connection.close();
//         return;
//       }
//       console.log(userData); // Successfully print userData
//       const {userid,username} = userData;
//       connection.userid = userid;
//       connection.username = username;

//       // Example: Sending a welcome message to the client
//       connection.send(JSON.stringify({ success: true, message: 'Connection established', userData }));
//     });
//   } else {
//     console.log('No cookies found');
//     connection.send(JSON.stringify({ success: false, message: 'No token provided' }));
//     connection.close();
//   }

//   connection.on('message', (message) => {
//     console.log(`Received: ${message}`);
//     // Process the message
//   });


//    [...wss.clients].forEach(client =>{
//     client.send(JSON.stringify({
//       online:[...wss.clients].map(c => ({userId: c.userId,username:c.username}))
//    }))
//    })
// });


import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { WebSocketServer } from 'ws';
import cookieParser from 'cookie-parser';
import cookie from 'cookie';
import jwt from 'jsonwebtoken'; // Assuming you use JWT for token generation

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173', // Update this to your client's origin
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));

const jwtSecret = "jwijdi2hu27673789430-49887585ui0tikirfgh37290-";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ChatAppMern');
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the process with failure
  }
};

connectDB();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'User already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.send({ success: true, message: 'Successfully Registered' });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign({ userId: user._id, username: user.name }, jwtSecret); // Use the correct secret
        res.cookie('token', token, { httpOnly: true }); // Set token as HTTP-only cookie
        res.send({ success: true, message: 'Login Successful', user: user });
      } else {
        res.send({ success: false, message: 'Password didn\'t match' });
      }
    } else {
      res.send({ message: 'User not registered' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

const port = 5001;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (connection, req) => {
  const cookies = req.headers.cookie;
  if (cookies) {
    const parsedCookies = cookie.parse(cookies);
    const token = parsedCookies.token;
    console.log(`Parsed Token: ${token}`); // Log the parsed token

    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      console.log(`Before verification: ${JSON.stringify(parsedCookies)}`); // Log before verification
      if (err) {
        console.error('JWT verification error:', err);
        connection.send(JSON.stringify({ success: false, message: 'Invalid token' }));
        connection.close();
        return;
      }
      console.log(userData); // Successfully print userData
      const { userId, username } = userData; // Corrected this line
      connection.userId = userId; // Corrected this line
      connection.username = username;

      console.log(`Connection set: userId=${userId}, username=${username}`);

      // Send a welcome message to the client
      connection.send(JSON.stringify({ success: true, message: 'Connection established', userData }));

      // Send updated online users list to all clients
      [...wss.clients].forEach(client => {
        client.send(JSON.stringify({
          online: [...wss.clients].map(c => ({ userId: c.userId, username: c.username }))
        }));
      });
    });
  } else {
    console.log('No cookies found');
    connection.send(JSON.stringify({ success: false, message: 'No token provided' }));
    connection.close();
  }

  connection.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Process the message
  });
});
