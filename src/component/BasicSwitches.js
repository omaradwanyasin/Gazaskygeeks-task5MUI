import * as React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { Mycontext } from "./Mycontext";
import { useContext } from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  const { checked } = useContext(Mycontext);
  const { handleChange } = useContext(Mycontext);

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
}
