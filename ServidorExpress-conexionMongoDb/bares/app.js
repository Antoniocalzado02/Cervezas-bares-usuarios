const { connect } = require('diskdb');
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express()
// require('./db')
const bares = require('./routes/bares')

// DATABASE CONNECTION
async function connectAtlas(){
    await dbConnection()
}
connectAtlas()
//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/bares', bares)



app.listen(process.env.PORT)