import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

const FormComponent = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setUserData(result);
        console.log(userData);
        setMessage("Success");
        usernameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        setMessage(`Error: ${response.statusText}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}
    >
      <Typography variant="h6" gutterBottom>
        Sign Up
      </Typography>
      {message && (
        <Alert
          severity={message === "Success" ? "success" : "error"}
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              inputRef={usernameRef}
              name="username"
              label="Username"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={emailRef}
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={passwordRef}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
      {userData && (
        <Box mt={4}>
          <Divider />
          <Typography variant="h6" gutterBottom mt={2}>
            User Data
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" alignItems="center">
              <Avatar
                src={userData.image}
                alt={userData.username}
                sx={{ mr: 2 }}
              />
              <Typography variant="body1">{userData.username}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">Email: {userData.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                First Name: {userData.firstName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Last Name: {userData.lastName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">Gender: {userData.gender}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default FormComponent;
