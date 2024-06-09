import { Checkbox } from "@mui/material";
import "./App.css";
import BOX from "./component/box";
import Buttons from "./component/button";
import Checkboxes from "./checkBox";
import FormComponent from "./component/form";
function App() {
  return (
    <>
      <h1>hello gamer</h1>

      <Checkboxes></Checkboxes>

      <Buttons></Buttons>
      <BOX />

      <FormComponent></FormComponent>
    </>
  );
}

export default App;
