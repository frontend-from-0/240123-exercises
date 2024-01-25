import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/" className="logo">Recipe App</RouterLink>
        </Typography>
        <Button color="inherit" component={RouterLink} to="/create-recipe" activeClassName="active-link">
          Create Recipe
        </Button>
        <Button color="inherit" component={RouterLink} to="/about" activeClassName="active-link">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
