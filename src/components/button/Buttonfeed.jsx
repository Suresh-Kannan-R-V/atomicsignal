import { Button } from "@mui/material";
import React from "react";
import { stylesnew } from "./style";

function Buttonsty({ reminder, text }) {
  return <Button sx={stylesnew.button(reminder)}>{text}</Button>;
}

export default Buttonsty;
