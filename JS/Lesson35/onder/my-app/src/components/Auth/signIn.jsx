import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography, Grid, Paper } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log("Signing in...");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4} margin={7}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Sign In
          </Typography>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={handleSignIn} sx={{ mt: 2 }}>
            Sign In
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log("Signing up...");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4} margin={7}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={handleSignUp} sx={{ mt: 2 }}>
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account? <Link to="/signin">Sign In</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export { SignIn, SignUp };
