const { connect } = require('diskdb');
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express()
// require('./db')
const users = require('./routes/users')


// DATABASE CONNECTION
async function connectAtlas(){
    await dbConnection()
}
connectAtlas()
//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/users', users)




app.listen(process.env.PORT)