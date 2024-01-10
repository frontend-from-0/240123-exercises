import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
	{ title: 'Home', location: '/' },
	{ title: 'New Recipe', location: '/recipes/new' },
	{ title: 'Account', location: '/user' },
	// {title: 'Log in', location: '/log-in'},
	// {title: 'Sign up', location: '/sign-up'},
];

export const Navbar = (props: Props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				Recipes App
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.title} disablePadding>
						<NavLink to={item.location}>
							<ListItemButton sx={{ textAlign: 'center' }}>
								<ListItemText primary={item.title} />
							</ListItemButton>
						</NavLink>
					</ListItem>
				))}
				<ListItem disablePadding>
					<ListItemButton onClick={() => console.log('Signing in...')}>
						<ListItemText primary={'Sign in'} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => console.log('Signing out...')}>
						<ListItemText primary={'Sign out'} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						Recipes App
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<NavLink
								to={item.location}
								key={item.title}
								style={{ color: '#fff' }}
							>
								<Button sx={{ color: '#fff' }}>{item.title}</Button>
							</NavLink>
						))}
						<Button
							sx={{ color: '#fff' }}
							onClick={() => console.log('Signing in...')}
						>
							Sign in
						</Button>
						<Button
							sx={{ color: '#fff' }}
							onClick={() => console.log('Signing out...')}
						>
							Sign out
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						'display': { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
};
