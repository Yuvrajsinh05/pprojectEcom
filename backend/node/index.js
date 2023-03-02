const express = require('express')
require('./config')
const cors = require('cors');
const CategoriesSchema = require('./Schema/Categories')


const app = express()
app.use(express.json())
app.use(cors())


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

  // function generates random string like "CATG23906056"

  function generateRandomString() {
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




app.listen(8670, () => {
  console.log("server is runiing on", `${8670}`)
})