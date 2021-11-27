import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import cubejs from '@cubejs-client/core'
import { CubeProvider } from '@cubejs-client/react'
import { ThemeProvider } from '@mui/material/styles'

import App from './App'

import './index.css'

import theme from './theme'

const cubejsApi = cubejs(process.env.REACT_APP_JWT, { apiUrl: `${process.env.REACT_APP_API_URL}/cubejs-api/v1` })

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CubeProvider cubejsApi={cubejsApi}>
					<App />
				</CubeProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
