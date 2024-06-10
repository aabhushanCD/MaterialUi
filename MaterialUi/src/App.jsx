// import React, { useState } from "react";
import "./App.css";
// import FormComponent from "./component/form.jsx";
import { Badge, Button } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
function App() {
  // const [isRegistered, setIsRegistered] = useState(false);
  // const handleRegister = () => {
  //   setIsRegistered(true);

  return (
    <>
      {/* <h1>Fill the form</h1>
      <FormComponent onRegister={handleRegister} />
      {isRegistered ? <h1>Hello gamer</h1> : <h2>Not hello gamer</h2>} */}
      <Button varient="">hello</Button>
      <Button variant="outlined">Hello</Button>
      <Badge badgeContent={1} color="primary">
        <MailIcon color="action" />
      </Badge>
    </>
  );
}
export default App;
