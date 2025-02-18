
const JWT_SECRET = 'bunneybet';
const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/UserSignUp');
const bcrypt = require('bcryptjs');
// const ScraperRouter = require('./Matka.js');
const mongoose = require('mongoose');
const User_Wallet = require('./models/Wallet.js');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const playerRouter = require("./Routes/cricket/playerRoutes");
dotenv.config();
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment'); // For Node.js

// Middleware to parse JSON requests
app.use(express.json());
const betRoutes = require('./Routes/betRoutes');
const matkaRouter = require('./Routes/matkaRoutes.js');
const Matka = require('./models/matkaModel.js')
const papuRouter = require("./Routes/pappuRoutes.js")
port = 4000
// CORS configuration

app.use(
  cors({
    origin: ["https://www.98fastbet.com", "https://admin.98fastbet.com"], // Replace '*' with the specific origin(s) you want to allow, e.g., 'https://yourdomain.com'
    methods: ['POST', 'GET', 'PUT', 'DELETE'], // Define allowed HTTP methods
    credentials: true, // Allow credentials like cookies to be sent
  })
);
// app.use(cors());

const MONGO_URI = process.env.mongodb_url;
// MongoDB connection
mongoose.connect(`mongodb+srv://infusion:oxPmrqHhXOdsBLPk@cluster0.rnz0y.mongodb.net/laxhmibook?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Get User and Wallet Info
// Define required market
// s
const NodeCache = require('node-cache');


const cache = new NodeCache({ stdTTL: 60 });
const REQUIRED_MARKETS = [
  "SRIDEVI MORNING",
  "MILAN MORNING",
  "KALYAN MORNING",
  "SRIDEVI",
  "TIME BAZAR",
  "MADHUR DAY",
  "RAJDHANI DAY",
  "MILAN DAY",
  "KALYAN",
  "SRIDEVI NIGHT",
  "MILAN NIGHT",
  "KALYAN NIGHT",
  "RAJDHANI NIGHT",
  "GOLDEN MATKA",
  "FASTBET MATKA"
];


app.get('/api/subscription-state', async (req, res) => {
  try {
      // Check if data is already cached
      const cachedData = cache.get('scrapedData');
      if (cachedData) {
          console.log('Serving data from cache');
          return res.status(200).json(cachedData);
      }

      console.log('Fetching fresh data...');
      const domain = 'https://www.shrimatka.in';

      // Fetch HTML Content using Axios
      const { data: htmlContent } = await axios.get(domain);
      const $ = cheerio.load(htmlContent); // Load HTML into Cheerio

      // Extract Market Data
      const markets = [];
      const rawText = $('body').text(); // Extract all text from the body

      // Split the text into chunks based on "Open" keyword
      const marketChunks = rawText.split('Open').slice(1); // Skip the first chunk (header)

      marketChunks.forEach(chunk => {
          const lines = chunk.split('\n').map(line => line.trim()).filter(line => line.length > 0);

          // Parse the data
          const openTime = lines[0].trim(); // First line after "Open"
          const closeTime = lines[2].trim(); // Third line after "Open"
          const marketName = lines[3].trim(); // Fourth line (market name)
          const openNumber = lines[4].trim() || '--'; // Fifth line (open number)
          const jodiDigit = lines[5].trim() || '--'; // Sixth line (jodi digit)
          const closeNumber = lines[6].trim() || '--'; // Seventh line (close number)

          // Calculate bid status
          const currentTime = moment();
          const openTimeMoment = moment(openTime, 'hh:mm a');
          const closeTimeMoment = moment(closeTime, 'hh:mm a');
          const isBeforeOpenTime = currentTime.isBefore(openTimeMoment);
          const isBeforeCloseTime = currentTime.isBefore(closeTimeMoment);
          const isAfterOpenTime = currentTime.isAfter(openTimeMoment);
          let bidStatus;

          if (openNumber === "***" && closeNumber === "***" && isBeforeOpenTime && isBeforeCloseTime) {
            bidStatus = "Open | Close";
          } else if (openNumber !== "***" && closeNumber === "***" || !isBeforeOpenTime && isBeforeCloseTime) {
            bidStatus = "Close";
            // } else if (!isBeforeOpenTime && isBeforeCloseTime) {
            //   bidStatus = "Close";  // ✅ Open time has passed but close time has not
          } else if (openNumber !== "***" && closeNumber !== "***" && !isBeforeOpenTime && !isBeforeCloseTime) {
            bidStatus = "Closed"; // ✅ Both open time and close time have passed
          }


          // Add to markets array
          markets.push({
              marketName,
              openNumber,
              jodiDigit,
              closeNumber,
              openTime,
              closeTime,
              bidStatus
          });
      });


      const matkaData = await Matka.find();
    // console.log(matkaData);
    if (Array.isArray(matkaData)) {
      matkaData.forEach(data => {
        markets.push({
          marketName: data.marketName,
          openNumber: data.openNumber,
          jodiDigit: data.jodiDigit,
          closeNumber: data.closeNumber,
          openTime: data.openTime,
          closeTime: data.closeTime,
          bidStatus:
          data.openNumber === "***" && data.closeNumber === "***" && isBeforeOpenTime && isBeforeCloseTime
              ? "Open | Close"
              : (data.openNumber !== "***" && data.closeNumber === "***") || (!isBeforeOpenTime && isBeforeCloseTime)
                ? "Close"
                : data.openNumber !== "***" && data.closeNumber !== "***" && !isBeforeOpenTime && !isBeforeCloseTime
                  ? "Closed" : data.bidStatus
        });
      });
    } else {
      console.error("matkaData is not an array:", matkaData);
    }

      // Filter markets based on REQUIRED_MARKETS
      const filteredMarkets = markets.filter(market =>
          REQUIRED_MARKETS.includes(market.marketName)
      );

      // Combine scraped data
      const responseData = {
          message: 'Data fetched and scraped successfully',
          scrapedData: { markets: filteredMarkets }
      };

      // Cache the data for 60 seconds
      cache.set('scrapedData', responseData);

      // ✅ Send Response
      res.json(responseData);
  } catch (error) {
      console.error('Error fetching or scraping data:', error.message);
      res.status(500).json({
          error: 'An error occurred while fetching or scraping data',
          details: error.message
      });
  }
});



app.get('/api/name/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user and wallet by ID
    const user = await User.findById(id);
    const wallet = await User_Wallet.findOne({ user: id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with username, wallet balance, and email
    res.json({ username: user.username, walletBalance: wallet.balance, email: user.email });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Sign Up Route
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Ensure all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Create a wallet for the new user
    const wallet = new User_Wallet({
      user: savedUser._id,
      balance: 15000, // Set an initial wallet balance if desired
    });
    await wallet.save();

    // Link the wallet to the user
    savedUser.wallet = wallet._id;
    await savedUser.save();

    // Respond with success
    res.status(201).json({
      message: 'User registered successfully',
      user: { id: savedUser._id, username: savedUser.username, email: savedUser.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username }).populate('wallet');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        walletBalance: user.wallet?.balance || 0,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.use("/", matkaRouter)
app.use("/", playerRouter)

app.use(betRoutes);
app.use(papuRouter)
// Start server
app.listen(process.env.PORT || 4000, () => {
  console.log('Server started on port 4000');
});
