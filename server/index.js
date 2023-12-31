const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const kpiRoutes = require('./routes/kpi.js')
const KPI = require('./models/KPI')
const Product = require('./models/Product')
const Transaction = require('./models/Transaction')
const {kpis, products, transactions} = require('./data/data')
const productRoutes = require('./routes/product.js')
const transactionRoutes = require('./routes/transaction')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use('/kpi', kpiRoutes)
app.use('/product', productRoutes)
app.use('/transaction', transactionRoutes)

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(async () => {
		app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`))
		await mongoose.connection.dropDatabase();
		Product.insertMany(products);
		KPI.insertMany(kpis)
		Transaction.insertMany(transactions)
	})
	.catch(err => console.log(err))