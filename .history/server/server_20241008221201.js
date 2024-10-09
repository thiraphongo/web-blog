const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const mongoose = require("mongoose")

require('dotenv').config()


const app = express()

// connect Database
mongoose.connect(process.env.DATABASE)
.then(()=>console.log("Connect Database Successfully!"))
.catch((err)=>console.log(err))


// route - เส้นทาง




// Global Error
app.use((err,res,req,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status:err.status,
        massage:err.massage,
    })
})


//  middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// route
app.get("*", (req, res) => {
    res.json({
        data: "message from server"
    })
})


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Start Server in port ${port}`);

})