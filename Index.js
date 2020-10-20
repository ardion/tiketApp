const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const db = require('./helper/db')
require('dotenv').config()
const cors = require('cors')
const { request, response } = require('express')

app.use('/uploads', express.static('Uploads'))

const registerRouter = require('./routers/register')
const order = require('./Routers/Price')
const orderdetail = require('./Routers/order')
const payment = require('./Routers/payment')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/regis', registerRouter)
app.use('/order', order)
app.use('/orderdetail', orderdetail)
app.use('/payment', payment)

app.use(cors())

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.get('/', (request, response) => {
  response.send('Android 1 Backend')
})

app.listen(process.env.PORT, () => {
  console.log(`App Listen on Port ${process.env.PORT}!`)
})
