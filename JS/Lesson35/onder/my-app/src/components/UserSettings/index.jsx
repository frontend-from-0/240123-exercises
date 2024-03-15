import React, { useState } from "react";
import { Typography, Paper, Container, TextField, Button } from "@mui/material";
import "./UserSettingsPage.css"; // Import custom CSS file

const UserSettingsPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [creditCardInfo, setCreditCardInfo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSaveSettings = () => {
    // Implement logic to save settings
    console.log("Saving settings...");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Home Address:", homeAddress);
    console.log("Credit Card Info:", creditCardInfo);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h5" gutterBottom>
          User Settings
        </Typography>
        <form>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Home Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={homeAddress}
            onChange={(e) => setHomeAddress(e.target.value)}
          />
          <TextField
            label="Credit Card Info"
            variant="outlined"
            fullWidth
            margin="normal"
            value={creditCardInfo}
            onChange={(e) => setCreditCardInfo(e.target.value)}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveSettings}
            style={{ marginTop: "20px" }}
          >
            Save Settings
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default UserSettingsPage;
