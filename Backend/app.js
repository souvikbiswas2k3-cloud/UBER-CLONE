const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express();
const ConnectToDB = require('./db/db')
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const cookieParser = require('cookie-parser');


ConnectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.get('/', (res,req) => {
    req.send("Hello, World");
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app