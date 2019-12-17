const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

app.get("/",(req,res)=>{
    res.json({msg:"success"});
})
//cors middleware
app.use(cors());

//bodyparser middleware
app.use(bodyparser.json());

//connect db
const db = require('./config/database');

//chec conn
db.authenticate().then(console.log("true")).catch(err=>{console.log(err)});

// user routes
app.use('/api/users',require('./routes/users'))
app.use('/api/accounts',require('./routes/accounts'))

//server port
const PORT = process.env.PORT||8000;

//start server
app.listen(PORT,console.log(`Server is running at ${PORT}`));
