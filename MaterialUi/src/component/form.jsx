import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const FormComponent = ({ onRegister }) => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);
  const [open, setOpen] = useState(false);

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
        setMessage("Success");
        usernameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        setOpen(true); // Open the dialog
        onRegister(); // Call the onRegister function
      } else {
        setMessage(`Error: ${response.statusText}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            User Data
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {userData && (
              <Box>
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
                    <Typography variant="body2">
                      Email: {userData.email}
                    </Typography>
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
                    <Typography variant="body2">
                      Gender: {userData.gender}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default FormComponent;
