import { styled } from '@mui/material/styles'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import InfoBlock from '../components/InfoBlock'

const Heading = styled(Typography)(({ theme }) => ({ color: theme.palette.background.main }))

const StyledGridContainer = styled(Grid)({ marginTop: 42, paddingRight: 74 })

const data = [
	{ type: 'Revenue', amount: '$9,000K', date: 'Aug 2020', MoM: 21.7 },
	{ type: 'Cost of Goods', amount: '$4,000K', date: 'Aug 2020', MoM: -13.1 },
	{ type: 'Gross Margin', amount: '$5,000K', date: 'Aug 2020', MoM: 11.4 },
	{ type: 'Gross Margin %', amount: '55.5%', date: 'Aug 2020', MoM: 14.7 },
]

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
				</Grid>
			</StyledGridContainer>
		</div>
	)
}

export default Dashboard
