import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BOX() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ p: 10 }}>
        <Grid item xs={6} md={8}>
          <Item>Item1</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>Item 2</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>item-3</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>item-4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BOX;
