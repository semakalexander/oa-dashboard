import { styled } from '@mui/material/styles'
import Search from '@mui/icons-material/Search'
import WbSunny from '@mui/icons-material/WbSunny'
import Help from '@mui/icons-material/Help'
import Person from '@mui/icons-material/Person'

const HeaderContainer = styled('div')(({ theme }) => ({
	padding: '20px 18px 16px',
	display: 'flex',
	justifyContent: 'flex-end',
	[theme.breakpoints.up('xl')]: {
		padding: '32px 30px 26px',
	},
}))

const IconsContainer = styled('div')(({ theme }) => ({
	display: 'flex',

	'& svg': {
		fill: theme.palette.text.main,
		width: 24,
		height: 'auto',
		[theme.breakpoints.up('xl')]: {
			width: 32,
		},

		'&:not(:first-of-type)': {
			marginLeft: 12,
		},
	},
}))

const Header = () => {
	return (
		<HeaderContainer>
			<IconsContainer>
				<Search />
				<WbSunny />
				<Help />
				<Person />
			</IconsContainer>
		</HeaderContainer>
	)
}

export default Header
