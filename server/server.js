
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


require ("dotenv").config();
require('./config/mongoose.config');
//app.use(cors()); 
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const UserRoutes = require("./routes/user.routes");
UserRoutes(app);

app.listen(process.env.PORT, () =>
    console.log("express is running on", process.env.PORT)
);
