const express = require('express')
require('./config')
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const CategoriesSchema = require('./Schema/Categories')
const HomeCorouselSchema = require('./Schema/homecorousel')
const Mobileschema = require('./Schema/subCategories/Mobiles&Accessories')
const computerSchema = require('./Schema/subCategories/Computers&Accessories')


const app = express()
app.use(express.json())
app.use(cors())


// categories section start here

app.get('/Categories', async (req, res) => {
  let data = await CategoriesSchema.find()
  res.send(JSON.stringify(data))
  res.end()
})



app.post('/createCategories', async (req, res) => {

  let randomString = generateRandomString();

  let data = {
    Categories: req.body.Categories,
    SubCategories: req.body.SubCategories,
    Products: req.body.Products,
    CategoriesId: randomString
  }

  function generateRandomString() {
    // function generates random string like "CATG23906056"
    let result = "CATG";
    for (let i = 0; i < 8; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  try {
    const createCate = new CategoriesSchema(data)
    let response = await createCate.save()
    return res.status(200).json({ message: "new category has been created", data: response })
  } catch (error) {
    console.log("error while creating new category", error)
    return res.status(401).json({ message: "error found while creating new category" })
  }
})
// categories section Ends here


// homeCorousel starts here
app.get('/homecorousel', async (req, res) => {
  let data = await HomeCorouselSchema.find()
  console.log("data", data)
  res.send((JSON.stringify(data)))
  res.end()
})
// homeCarousel ends here

// computer&Accessories start here 
app.get('/computer&Accessories',async(req,res)=>{
  try{
    const collection = await computerSchema.find()
    res.status(200).json({data:collection,message:"computer&Accessories data found"})
  }catch(err){
    res.status(400).json({message:"error found"})
  } 
})
// computer&Accessories ends here .........

// Mobileschema start here 
app.get('/mobiles',async(req,res)=>{
  try{
    const collection = await Mobileschema.find()
    res.status(200).json({data:collection,message:"Mobiles data found"})
  }catch(err){
    res.status(400).json({message:"error found"})
  } 
})
// Mobileschema ends here .........





// update from here 

// app.put('/update',async(req,res)=>{
//   try{
//     let computerData = await Mobileschema.updateMany(
//       {
//         $set:{type:"mobile&acceseries"}
//       }
//      ) 

//     // let computerData = await Mobileschema.find()

//      res.status(200).json({data:computerData,message:"finnaly prove it"})
//     }catch(err){
//       res.status(400).json({message:"try hard"})
//     }
// })



app.listen(8670, () => {
  console.log("server is runiing on", `${8670}`)
})