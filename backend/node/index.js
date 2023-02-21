const express = require('express')
require('./config')

const Product = require('./products')


const app = express()
app.use(express.json())

app.get('/', async(req, res) => {
   let data = await Product.find()
   res.send(data)
  //  res.end()
  })
  
  
app.listen(8670,()=>{
    console.log("servier runns")
})