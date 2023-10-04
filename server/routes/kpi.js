const express = require('express')
const router = express.Router()
const KPI = require('../models/KPI')

router.get('/kpis', async(req, res) => {
	try {
		const kpis = await KPI.find()
		res.status(200).json(kpis);
	} catch (err) {
		res.status(404).json({message: err.message})
	}
})

module.exports = router