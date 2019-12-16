const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.get("/",(req,res)=>{
    res.json({msg:"success"});
})
app.use(cors());
app.use(bodyparser.json());
const db = require('./config/database');
db.authenticate().then(console.log("true")).catch(err=>{console.log(err)});


app.use('/user',require('./routes/users'))


const PORT = process.env.PORT||8000;
app.listen(PORT,console.log(`Server is running at ${PORT}`));
