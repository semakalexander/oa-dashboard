import cubejs from '@cubejs-client/core'
import { CubeProvider } from '@cubejs-client/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { styled, ThemeProvider } from '@mui/material/styles'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

import theme from './theme'

const cubejsApi = cubejs(process.env.REACT_APP_JWT, { apiUrl: `${process.env.REACT_APP_API_URL}/cubejs-api/v1` })

const MainContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	background: theme.palette.background.light,
	minHeight: '100vh',
}))

const ContentContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: `calc(100% - ${theme.variables.sidebarWidth}px)`,
	paddingLeft: 70,
}))

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CubeProvider cubejsApi={cubejsApi}>
					<MainContainer>
						<Sidebar />

						<ContentContainer>
							<Header />

							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/dashboard" element={<Dashboard />} />
							</Routes>
						</ContentContainer>
					</MainContainer>
				</CubeProvider>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
