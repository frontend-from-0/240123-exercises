import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { DarkMode, ModeNight, Restaurant } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ListItemButton, ListItemIcon, Switch } from '@mui/material';

const pages = ['New Recipe', 'Sign In', 'Sign up', 'User Settings'];

export const Navbar = ({ mode, setMode }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Restaurant sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                        }}
                    >
                        <NavLink style={{ textDecoration: 'none', color: '#fff' }} to={`/`}>Recipe App</NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, position: 'absolute', left: '10px', display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={anchorElNav}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem component={NavLink} key={page} onClick={handleCloseNavMenu}
                                    sx={{ color: 'primary.main' }}
                                    to={
                                        `${page === 'New Recipe' ? '/recipes/new'
                                            : page === 'Sign In' ? '/signInPage'
                                                : page === 'Sign up' ? '/signUpPage'
                                                    : page === 'User Settings' ? '/user/settings' : '/'
                                        } `}
                                >
                                    {page}
                                </MenuItem>

                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, margin: 'auto auto' }}>

                        <Restaurant sx={{ mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                            }}
                        >
                            <NavLink style={{ textDecoration: 'none', color: '#fff' }} to={`/`}>Recipe App</NavLink>

                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, gap: '10px', position: 'absolute', right: '12%', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button key={page} component={NavLink} sx={{ color: '#fff', '&:hover': { backgroundColor: 'action.hover' } }} to={
                                `${page === 'New Recipe' ? '/recipes/new'
                                    : page === 'Sign In' ? '/signInPage'
                                        : page === 'Sign up' ? '/signUpPage'
                                            : page === 'User Settings' ? '/user/settings' : '/'
                                } `}>{page}</Button>
                        ))}
                    </Box>
                    <Box sx={{ position: 'fixed', right: '1px' }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon component="a">
                                {mode === 'light' ? <ModeNight sx={{ color: 'primary.light' }} /> : <DarkMode />}
                            </ListItemIcon>
                            <Switch size='medium' onChange={e => setMode(prev => mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}