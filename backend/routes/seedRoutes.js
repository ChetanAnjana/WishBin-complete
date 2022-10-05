import express from 'express'
import Product from '../models/productModel.js'
import data from '../data.js'
import User from '../models/userModel.js'

const seedRouter = express.Router()

seedRouter.get('/', async (req, res) => {
  await Product.remove({})
  await User.remove({})
  const createdUsers = await User.insertMany(data.users)
  res.send({ createdProducts, createdUsers })
  res.send({ createdProducts })
})
export default seedRouter
