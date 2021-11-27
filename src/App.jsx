import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

const MainContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	background: theme.palette.background.light,
	minHeight: '100vh',
}))

const ContentContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: 35,
	width: '100%',
	boxSizing: 'border-box',
	[theme.breakpoints.up('md')]: {
		width: `calc(100% - ${theme.variables.sidebarWidth}px)`,
	},
	[theme.breakpoints.up('xl')]: {
		paddingLeft: 70,
		width: `calc(100% - ${theme.variables.sidebarWidthXl}px)`,
	},
}))

const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
	position: 'absolute',
	top: 20,
	left: 35,
	fill: theme.palette.text.main,
	cursor: 'pointer',
}))

const App = () => {
	const [isSidebarHidden, setIsSidebarHidden] = useState(true)

	return (
		<MainContainer>
			<StyledMenuIcon onClick={() => setIsSidebarHidden(false)} />

			<Sidebar isHidden={isSidebarHidden} hide={() => setIsSidebarHidden(true)} />

			<ContentContainer>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</ContentContainer>
		</MainContainer>
	)
}

export default App
