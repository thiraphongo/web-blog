const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const moongoose = require('mongoose')

require('dotenv').config()


const app = express()

//  middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// route
app.get("*",()=> {
    res.json({
        "data":"test"
    })
})


const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Start Server in port ${port}`);
    
})