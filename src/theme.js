import { createTheme } from '@mui/material'

export default createTheme({
	fontFamily: 'Roboto',
	palette: {
		light: '#fff',
		text: {
			main: '#636E72',
			light1: '#747C83',
		},
		background: {
			main: '#10AC84',
			dark: '#0E8E6D',
			light: '#F3F3F3',
		},
		badge: {
			neutral: '#B0B6B8',
			danger: '#E66767',
		},
	},
	typography: {
		h1: {
			lineHeight: 1,
			fontSize: 32,
			letterSpacing: '0.5px',
			fontWeight: '400',
		},
		h2: {
			fontWeight: 'normal',
			fontSize: 20,
			lineHeight: '26px',
		},
	},
	variables: {
		sidebarWidth: 280,
	},
})
