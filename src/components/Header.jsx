import { styled } from '@mui/material/styles'
import Search from '@mui/icons-material/Search'
import WbSunny from '@mui/icons-material/WbSunny'
import Help from '@mui/icons-material/Help'
import Person from '@mui/icons-material/Person'

const HeaderContainer = styled('div')(({ theme }) => ({
	padding: '32px 30px 26px',
	display: 'flex',
	justifyContent: 'flex-end',
}))

const IconsContainer = styled('div')(({ theme }) => ({
	display: 'flex',

	'& svg': {
		fill: theme.palette.text.main,
		width: 32,
		height: 'auto',

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
