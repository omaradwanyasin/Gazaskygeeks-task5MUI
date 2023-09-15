import "./App.css";
import BasicAccordion from "./component/BasicAccordion";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Mycontext } from "./component/Mycontext";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="App">
      <Mycontext.Provider value={{ checked, handleChange }}>
        <Container maxWidth="sm">
          <BasicAccordion />

          <Collapse in={checked} collapsedSize={100}>
            <div
              style={{ backgroundColor: "orange", marginTop: 20, height: 300 }}
            >
              <Typography variant="h2" gutterBottom>
                Hello World
              </Typography>
            </div>
          </Collapse>
        </Container>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
