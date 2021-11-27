import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const TableSection = styled('div')(() => ({
	background: '#fff',
	padding: '28px 18px',
	boxSizing: 'border-box',
	boxShadow: '0px 2px 12px -6px rgba(0,0,0,0.25)',
	border: '1px solid rgba(0, 0, 0, 0.1)',
	borderRadius: '8px',
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
	padding: '4px 12px',
	whiteSpace: 'nowrap',
	[theme.breakpoints.up('xl')]: {
		padding: '12px 16px',
	},
}))

const StyledTableBodyRow = styled(TableRow)(() => ({ background: '#fff' }))

const StyledTableBodyCell = styled(TableCell)(({ theme }) => ({
	lineHeight: 1,
	letterSpacing: 0,
	borderBottom: 'none',
	fontSize: 12,
	color: theme.palette.text.main,
	fontWeight: 600,
	padding: '4px 12px',
	whiteSpace: 'nowrap',

	[theme.breakpoints.up('xl')]: {
		padding: '12px 16px',
	},
}))

const tableData = [...new Array(100)].map((_, id) => ({
	id,
	customer: 'Customer 1',
	invoiceData: '10/30/2020',
	revenue: 6000,
	costOfGoods: 2000,
	grossMargin: 4000,
}))

const TableBlock = () => {
	return (
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
								<StyledTableBodyCell>${item.costOfGoods.toFixed(2)}</StyledTableBodyCell>
								<StyledTableBodyCell>${item.grossMargin.toFixed(2)}</StyledTableBodyCell>
							</StyledTableBodyRow>
						))}
					</TableBody>
				</Table>
			</StyledTableContainer>
		</TableSection>
	)
}

export default TableBlock
