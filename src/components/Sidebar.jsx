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
import CloseIcon from '@mui/icons-material/Close'

const StyledDrawer = styled(Drawer, { shouldForwardProp: prop => prop !== 'isHidden' })(({ theme, isHidden }) => ({
	width: 375,
	position: 'absolute',
	flexShrink: 0,
	display: isHidden ? 'none' : 'block',
	[theme.breakpoints.up('md')]: {
		position: 'static',
		width: theme.variables.sidebarWidth,
		display: 'block',
	},
	[theme.breakpoints.up('xl')]: {
		width: theme.variables.sidebarWidthXl,
	},

	'& .MuiDrawer-paper': {
		width: 375,
		boxSizing: 'border-box',
		background: `${theme.palette.background.main} 0% 0% no-repeat padding-box`,
		[theme.breakpoints.up('md')]: {
			width: theme.variables.sidebarWidth,
		},
		[theme.breakpoints.up('xl')]: {
			width: theme.variables.sidebarWidthXl,
		},
	},
}))

const StyledHeading = styled(Typography)(({ theme }) => ({
	color: theme.palette.light,
	padding: '24px 26px',
	letterSpacing: '0.26px',
	[theme.breakpoints.up('xl')]: {
		padding: '38px 40px',
	},
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

const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
	fill: '#fff',
	position: 'absolute',
	top: '12px',
	right: '16px',
	width: 24,
	height: 24,
	cursor: 'pointer',
}))

const Sidebar = ({ isHidden, hide }) => {
	return (
		<StyledDrawer variant="permanent" anchor="left" open isHidden={isHidden}>
			{!isHidden && <StyledCloseIcon onClick={hide} />}

			<StyledHeading variant="h2">OverlayAnalytics</StyledHeading>

			<List>
				<ListItem disablePadding>
					<StyledListItemButton component={NavLink} to="/" onClick={hide}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</StyledListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<StyledListItemButton component={NavLink} to="/dashboard" onClick={hide}>
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
