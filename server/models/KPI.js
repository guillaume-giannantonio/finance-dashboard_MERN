const mongoose = require('mongoose')
const { loadType } = require('mongoose-currency')

const Schema = mongoose.Schema;
loadType(mongoose);

const monthSchema = new Schema(
	{
		month: String,
		revenue: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		expenses: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		operationalExpenses: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		nonOperationalExpenses: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
	},
	{ toJSON: { getters: true } }
);

const daySchema = new Schema(
	{
		date: String,
		revenue: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		expenses: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
	},
	{ toJSON: { getters: true } }
);

const categorySchema = new Schema(
	{
		salaries: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		supplies: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		services: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
	},
	{ toJSON: { getters: true } }
);

const KPISchema = new Schema(
	{
		totalProfit: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		totalRevenue: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		totalExpenses: {
			type: mongoose.Types.Currency,
			currency: "USD",
			get: (v) => v / 100,
		},
		expensesByCategory: [categorySchema],
		monthlyData: [monthSchema],
		dailyData: [daySchema],
	},
	{ timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);
module.exports = KPI