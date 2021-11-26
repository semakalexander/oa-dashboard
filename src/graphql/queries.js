const queries = {
	grossMarginLine: {
		measures: ['IncomeStatementMeasures.grossMargin'],
		timeDimensions: [
			{
				dimension: 'IncomeStatementMeasures.accountingPeriodEndDate',
				dateRange: ['2019-11-30', '2020-10-31'],
				granularity: 'month',
			},
		],
		filters: [],
		order: {},
	},
	revenueBar: {
		measures: ['IncomeStatementMeasures.grossProfit'],
		timeDimensions: [
			{
				dimension: 'IncomeStatementMeasures.accountingPeriodEndDate',
				dateRange: ['2019-11-30', '2020-10-31'],
				granularity: 'month',
			},
		],
		filters: [],
		order: {},
	},
}

export default queries
