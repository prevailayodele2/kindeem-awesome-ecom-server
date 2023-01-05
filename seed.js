const express = require('express')
const Category = require('./models/Category')
const ProductBrand = require('./models/ProductBrand')
const Product = require('./models/Product')
const Banner = require('./models/Banner')
const ProductImages = require('./models/ProductImages')
const {ProductCategory,BannerCarousel, ProductBrandData, ProductSubCategoryData, ProductCategoryData}  = require('./data')
const {ProductDate, ProductImagessss}  = require('./productData')

const app = express.Router()

app.get('/', async (req, res) =>{
    // await Category.deleteMany({})
    // const createdCategory = await ProductBrand.insertMany(ProductBrandData)
    
    // const createdProduct = await Product.insertMany(ProductDate)
    const createdProduct = await Category.insertMany(ProductCategoryData)
// console.log(new Date())
    // const createdProductImage = await ProductImages.insertMany(ProductImagessss)

    res.send({createdProduct})
    // res.send({createdCategory})
    // res.send('successful')
})

module.exports = app