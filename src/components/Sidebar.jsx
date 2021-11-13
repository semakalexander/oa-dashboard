import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

import HomeIcon from '@mui/icons-material/Home'
import DashboardIcon from '@mui/icons-material/Dashboard'

const StyledDrawer = styled(Drawer)(({ theme }) => ({
	width: theme.variables.sidebarWidth,
	flexShrink: 0,

	'& .MuiDrawer-paper': {
		width: theme.variables.sidebarWidth,
		boxSizing: 'border-box',
		background: `${theme.palette.background.main} 0% 0% no-repeat padding-box`,
	},
}))

const StyledHeading = styled(Typography)(({ theme }) => ({
	color: theme.palette.light,
	padding: '37px 40px',
	letterSpacing: '0.26px',
}))

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
	color: theme.palette.light,
	borderLeft: '8px solid transparent',

	'& svg': { fill: theme.palette.light },

	'&.active': {
		background: `${theme.palette.background.dark} 0% 0% no-repeat padding-box`,
		borderLeft: `8px solid ${theme.palette.light}`,
	},
}))

const Sidebar = () => {
	return (
		<StyledDrawer variant="permanent" anchor="left" open>
			<StyledHeading variant="h2">OverlayAnalytics</StyledHeading>

			<List>
				<ListItem disablePadding>
					<StyledListItemButton component={NavLink} to="/">
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</StyledListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<StyledListItemButton component={NavLink} to="/dashboard">
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="My Dashboard" />
					</StyledListItemButton>
				</ListItem>
			</List>
		</StyledDrawer>
	)
}

export default Sidebar
