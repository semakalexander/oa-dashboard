import { styled } from '@mui/material/styles'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ArrowUpward from '@mui/icons-material/ArrowUpward'
import ArrowDownward from '@mui/icons-material/ArrowDownward'

const Container = styled(Grid)(({ theme }) => ({
	height: 132,
	background: theme.palette.light,
	padding: '22px 30px',
	position: 'relative',
	borderRadius: '8px',
	boxShadow: '0px 2px 12px -6px rgba(0,0,0,0.25)',
	border: '1px solid rgba(0, 0, 0, 0.1)',
}))

const Type = styled(Typography)(({ theme }) => ({
	fontSize: 16,
	letterSpacing: '-1px',
	lineHeight: 1.1,
	color: theme.palette.text.main,
	[theme.breakpoints.up('xl')]: {
		fontSize: 18,
	},
}))

const Amount = styled(Typography)(({ theme }) => ({
	fontSize: 30,
	lineHeight: 1,
	letterSpacing: '-0.4px',
	marginTop: 12,
	fontWeight: 600,
	color: theme.palette.text.main,
	[theme.breakpoints.up('xl')]: {
		fontSize: 36,
	},
}))

const Date = styled(Typography)(({ theme }) => ({
	fontSize: 12,
	lineHeight: 1,
	letterSpacing: '0px',
	marginTop: 10,
	color: theme.palette.text.main,
	[theme.breakpoints.up('xl')]: {
		fontSize: 14,
	},
}))

const MoMContainer = styled('div')({
	position: 'absolute',
	right: 26,
	bottom: 14,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})

const MoMBadge = styled(Typography, { shouldForwardProp: prop => prop !== 'variant' })(({ theme, variant }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: 16,
	letterSpacing: '-0.5px',
	lineHeight: 1,
	padding: '2px 14px 2px 24px',
	borderRadius: '16px',
	color: theme.palette.light,
	background: theme.palette.badge[variant] || theme.palette.badge.neutral,
	[theme.breakpoints.up('xl')]: {
		fontSize: 18,
		padding: '2px 18px 2px 28px',
	},
}))

const MoMText = styled(Typography)(({ theme }) => ({
	fontSize: '12px',
	lineHeight: 1,
	letterSpacing: '0px',
	marginTop: 2,
	paddingLeft: 8,
	color: theme.palette.text.light1,
}))

const InfoBlock = ({ type, amount, date, MoM }) => {
	const isMoMPositive = +MoM > 0

	return (
		<Container>
			<Type>{type}</Type>
			<Amount>{amount}</Amount>
			<Date>{date}</Date>
			<MoMContainer>
				<MoMBadge variant={isMoMPositive ? 'neutral' : 'danger'}>
					{MoM}%{isMoMPositive ? <ArrowUpward /> : <ArrowDownward />}
				</MoMBadge>
				<MoMText>MoM</MoMText>
			</MoMContainer>
		</Container>
	)
}

export default InfoBlock
