import React from "react";
import { Typography, Paper, Container } from "@mui/material";

const UserPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h5" gutterBottom>
          User Page
        </Typography>
        <Typography>
          Welcome to your user page. Customize your settings here.
        </Typography>
      </Paper>
    </Container>
  );
};

export default UserPage;