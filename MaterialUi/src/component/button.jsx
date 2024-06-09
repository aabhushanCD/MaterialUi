import { Button, ButtonGroup } from "@mui/material";
export default function Buttons() {
  return (
    <>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic button group">
        <Button variant="contained">One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}
