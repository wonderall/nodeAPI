require('dotenv').config()
var cors = require('cors')
const express = require('express')
const app = express()
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const mongoose = require('mongoose');
const errorMiddleware = require('./middleware/errorMiddleware')
const PORT = process.env.PORT
const mongodbURL = process.env.URL
app.use(cors())//사용 방법 참조 : https://expressjs.com/en/resources/middleware/cors.html
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
   res.send('Hello World!!!!')
})

app.get('/blog', (req, res) => {
    res.send('blog')
  })



//routes
app.use('/api/products', productRoute)
app.use('/api/users',userRoute)
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
mongoose.connect(mongodbURL)
  .then(() => console.log('mogngoDB Connected!'))
  .catch((error)=>{
    console.log(error)
  })
