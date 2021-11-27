import { useCubeQuery } from '@cubejs-client/react'
import { styled } from '@mui/material/styles'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import InfoBlock from '../components/InfoBlock'
import TableBlock from '../components/TableBlock'
import Chart from '../components/Chart'
import ChartSkeleton from '../components/skeletons/ChartSkeleton'

import queries from '../graphql/queries'

const Heading = styled(Typography)(({ theme }) => ({ color: theme.palette.background.main }))

const StyledGridContainer = styled(Grid)(({ theme }) => ({
	marginTop: 28,
	paddingRight: 30,
	[theme.breakpoints.up('xl')]: {
		marginTop: 42,
		paddingRight: 74,
	},
}))

const data = [
	{ type: 'Revenue', amount: '$9,000K', date: 'Aug 2020', MoM: 21.7 },
	{ type: 'Cost of Goods', amount: '$4,000K', date: 'Aug 2020', MoM: -13.1 },
	{ type: 'Gross Margin', amount: '$5,000K', date: 'Aug 2020', MoM: 11.4 },
	{ type: 'Gross Margin %', amount: '55.5%', date: 'Aug 2020', MoM: 14.7 },
]

const cubeFields = {
	grossMargin: {
		date: 'IncomeStatementMeasures.accountingPeriodEndDate.month',
		value: 'IncomeStatementMeasures.grossMargin',
	},
	revenue: {
		date: 'IncomeStatementMeasures.accountingPeriodEndDate.month',
		value: 'IncomeStatementMeasures.grossProfit',
	},
}

const formatDate = stringDate => {
	const date = new Date(stringDate)
	return `${date.toLocaleString('default', { month: 'short' })}\n${date.getFullYear()}`
}

const Dashboard = () => {
	const { isLoading: isRevenueLoading, resultSet: revenueResultSet } = useCubeQuery(queries.revenueBar)
	const { isLoading: isGrossMarginLoading, resultSet: grossMarginResultSet } = useCubeQuery(queries.grossMarginLine)

	let revenueData = []
	let grossMarginData = []
	let costOfGoodsData = []

	if (revenueResultSet) {
		revenueData = revenueResultSet.tablePivot().map(el => {
			return {
				x: formatDate(el[cubeFields.revenue.date]),
				y: +el[cubeFields.revenue.value],
			}
		})
	}

	if (revenueData.length && grossMarginResultSet) {
		const max = Math.max(...revenueData.map(v => v.y))

		grossMarginData = grossMarginResultSet.tablePivot().map(el => {
			return {
				x: formatDate(el[cubeFields.grossMargin.date]),
				y: +el[cubeFields.grossMargin.value] * max,
			}
		})
	}

	if (revenueData.length) {
		const max = Math.max(...revenueData.map(v => v.y))

		costOfGoodsData = revenueResultSet.tablePivot().map(el => {
			return {
				x: formatDate(el[cubeFields.revenue.date]),
				y: Math.random() * max,
			}
		})
	}

	return (
		<div>
			<Heading variant="h1">My Dashboard</Heading>

			<StyledGridContainer>
				<Grid container spacing={2}>
					{data.map(item => (
						<Grid item xs={12} sm={6} xl={3} key={item.type}>
							<InfoBlock {...item} />
						</Grid>
					))}

					<Grid item xs={12} lg={6}>
						{isGrossMarginLoading || isRevenueLoading ? (
							<ChartSkeleton />
						) : (
							<Chart
								id="revenue-gross-margin-chart"
								barData={revenueData}
								lineData={costOfGoodsData}
								lineName="Cost of Goods"
								barName="Revenue"
							/>
						)}

						{isRevenueLoading ? (
							<ChartSkeleton />
						) : (
							<Chart
								id="revenue-cost-of-goods-chart"
								barData={revenueData}
								lineData={grossMarginData}
								lineName="Gross Margin"
								barName="Revenue"
							/>
						)}
					</Grid>

					<Grid item xs={12} lg={6} sx={{ overflow: 'hidden' }}>
						<TableBlock />
					</Grid>
				</Grid>
			</StyledGridContainer>
		</div>
	)
}

export default Dashboard
