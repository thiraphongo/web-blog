const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const moongoose = require('mongoose')

require('dotenv').config()


const app = express()

//  middleware
