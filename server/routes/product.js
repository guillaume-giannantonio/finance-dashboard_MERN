const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/products', async(req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (err) {
		res.status(404).json({message: err.message})
	}
})

module.exports = router