import { styled } from '@mui/material/styles'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import InfoBlock from '../components/InfoBlock'

const Heading = styled(Typography)(({ theme }) => ({ color: theme.palette.background.main }))

const StyledGridContainer = styled(Grid)({ marginTop: 42, paddingRight: 74 })

const data = [
	{ type: 'Revenue', amount: '$9,000K', date: 'Aug 2020', MoM: 21.7 },
	{ type: 'Cost of Goods', amount: '$4,000K', date: 'Aug 2020', MoM: -13.1 },
	{ type: 'Gross Margin', amount: '$5,000K', date: 'Aug 2020', MoM: 11.4 },
	{ type: 'Gross Margin %', amount: '55.5%', date: 'Aug 2020', MoM: 14.7 },
]

const StyledChart = styled('div')(() => ({
	background: 'red',
	height: 334,
	marginTop: 16,
	'&:first-of-type': {
		marginTop: 0,
	},
}))

const TableSection = styled('div')(() => ({
	background: '#fff',
	borderRadius: '5px',
	padding: '28px 18px',
	boxSizing: 'border-box',
}))

const TableHeading = styled(Typography)(({ theme }) => ({
	letterSpacing: '0',
	lineHeight: 1,
	fontSize: '16px',
	marginLeft: '15px',
	color: theme.palette.text.main,
}))

const StyledTableContainer = styled(TableContainer)(() => ({
	maxHeight: 604,
	overflow: 'auto',
	width: '100%',
	marginTop: 8,
}))

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
	lineHeight: 1,
	fontSize: '12px',
	borderBottom: 'none',
	fontWeight: 600,
	letterSpacing: '0px',
	color: theme.palette.text.main,
}))

const StyledTableBodyRow = styled(TableRow)(() => ({ background: '#fff' }))

const StyledTableBodyCell = styled(TableCell)(({ theme }) => ({
	lineHeight: 1,
	letterSpacing: 0,
	borderBottom: 'none',
	fontSize: 12,
	padding: '12px 16px',
	color: theme.palette.text.main,
	fontWeight: 600,
}))

const tableData = [...new Array(100)].map((_, id) => ({
	id,
	customer: 'Customer 1',
	invoiceData: '10/30/2020',
	revenue: 6000,
	costOfGoods: 2000,
	grossMargin: 4000,
}))

const Dashboard = () => {
	return (
		<div>
			<Heading variant="h1">My Dashboard</Heading>

			<StyledGridContainer>
				<Grid container spacing={2}>
					{data.map(item => (
						<Grid item xs={3} key={item.type}>
							<InfoBlock {...item} />
						</Grid>
					))}

					<Grid item xs={6}>
						<StyledChart />
						<StyledChart />
					</Grid>

					<Grid item xs={6} sx={{ overflow: 'hidden' }}>
						<TableSection>
							<TableHeading>Revenue Details</TableHeading>

							<StyledTableContainer>
								<Table stickyHeader aria-label="sticky table">
									<TableHead>
										<TableRow>
											<StyledTableHeadCell>Invoice #</StyledTableHeadCell>
											<StyledTableHeadCell>Customer</StyledTableHeadCell>
											<StyledTableHeadCell>Invoice Date</StyledTableHeadCell>
											<StyledTableHeadCell>Revenue</StyledTableHeadCell>
											<StyledTableHeadCell>Cost of Goods</StyledTableHeadCell>
											<StyledTableHeadCell>Gross Margin</StyledTableHeadCell>
										</TableRow>
									</TableHead>

									<TableBody>
										{tableData.map(item => (
											<StyledTableBodyRow key={item.id}>
												<StyledTableBodyCell>{item.id}</StyledTableBodyCell>
												<StyledTableBodyCell>{item.customer}</StyledTableBodyCell>
												<StyledTableBodyCell>{item.invoiceData}</StyledTableBodyCell>
												<StyledTableBodyCell>${item.revenue.toFixed(2)}</StyledTableBodyCell>
												<StyledTableBodyCell>
													${item.costOfGoods.toFixed(2)}
												</StyledTableBodyCell>
												<StyledTableBodyCell>
													${item.grossMargin.toFixed(2)}
												</StyledTableBodyCell>
											</StyledTableBodyRow>
										))}
									</TableBody>
								</Table>
							</StyledTableContainer>
						</TableSection>
					</Grid>
				</Grid>
			</StyledGridContainer>
		</div>
	)
}

export default Dashboard
