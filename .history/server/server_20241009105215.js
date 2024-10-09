const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const mongoose = require("mongoose")

const bodyParser = require('body-parser')

require('dotenv').config()


const app = express()

// connect Database
mongoose.connect(process.env.DATABASE)
.then(()=>console.log("Connect Database Successfully!"))
.catch((err)=>console.log(err))


//  middleware
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(morgan("dev"))


// import Route
// const authRoute =  require('./routes/auth')

// route

app.get("*", (req, res) => {
    res.json({
        data: "message from server"
    })
})

// app.use('/api',authRoute);



const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Start Server in port ${port}`);

})