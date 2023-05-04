//dotenv is a popular Node.js module that enables loading environment variables from a .env file into process.env
const dotenv = require('dotenv').config();

// Express is a third party nodejs backend module which helps in routing, designing web applications 
const express = require('express');
const mongoose = require('mongoose');
// Body Parser is a middleware and used to process HTTP request -> post requests by making it into JSON format
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./userRoute');

const app = express();
//Middlewares
//The express.json() middleware function is used to parse incoming requests with JSON payloads. 
app.use(express.json());
//middleware function is used to parse incoming requests with URL-encoded payloads.
app.use(express.urlencoded({extended: true}));
//The cors() middleware in Express adds the necessary HTTP headers to the response to allow the browser to access resources from a different domain.
app.use(cors());

// body object to the request object containing the parsed data.
app.use(bodyParser.json());

app.use('/', userRoute);

app.get("/", (req, res) => {
    res.send("home page");
});


const PORT = process.env.PORT || 5000;

mongoose
  .connect('mongodb://localhost:27017/tdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })


  .catch((err) => console.log(err));