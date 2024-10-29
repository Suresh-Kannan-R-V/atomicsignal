import { Box } from "@mui/material";
import React, { useState } from "react";
import StyledInputLabel from "../inputLabel/InputLabel";
import StyledTextField from "../textField/TextField";
import { CatButton, stylesnew } from "./Styles";
import StyledDatePicker from "../datePicker/DatePicker";

function Filter({ activeTab }) {
  const [Signals, setSignal] = useState("Communication");
  const [Performances, setPerformance] = useState("Impactful");
  const [Responses, setResponse] = useState("Yes");
  const Signal = [
    "Communication",
    "Efficiency",
    "Delivery",
    "Time management",
    "Unavailability",
  ];

  const Performance = [
    "Impactful",
    "Spectacular",
    "Very good",
    "Good",
    "Need to improve",
    "Need to improve a lot",
    "Completely away",
  ];

  const Response = ["Yes", "No"];

  const getLabel = () => {
    if (activeTab === "1") return "Send to";
    if (activeTab === "2") return "Receive from";
    return "Receive from";
  };

  return (
    <Box sx={{ height: "100%", width: "352px", padding: "0 24px" }}>
      <StyledInputLabel>{getLabel()}</StyledInputLabel>
      <StyledTextField
        sx={stylesnew.mt}
        placeholder="Team member name"
        size="small"
        fullWidth
      />
      {activeTab === "3" && (
        <>
          <StyledInputLabel sx={stylesnew.mtt}>Send to</StyledInputLabel>
          <StyledTextField
            sx={stylesnew.mt}
            placeholder="Team member name"
            size="small"
            fullWidth
          />
        </>
      )}
      <StyledInputLabel sx={stylesnew.mtt}>Signals</StyledInputLabel>
      {Signal.map((category) => (
        <CatButton
          key={category}
          sx={Signals === category ? { ...stylesnew.active } : ""}
          onClick={() => setSignal(category)}
        >
          {category}
        </CatButton>
      ))}

      <StyledInputLabel sx={stylesnew.mtt}>Performance</StyledInputLabel>
      {Performance.map((Performance) => (
        <CatButton
          key={Performance}
          sx={Performances === Performance ? { ...stylesnew.active } : ""}
          onClick={() => setPerformance(Performance)}
        >
          {Performance}
        </CatButton>
      ))}

      <StyledInputLabel sx={stylesnew.mtt} required>
        Date range
      </StyledInputLabel>
      <StyledDatePicker />

      <StyledInputLabel sx={stylesnew.mtt}>Response status</StyledInputLabel>
      {Response.map((Response) => (
        <CatButton
          key={Response}
          sx={Responses === Response ? { ...stylesnew.active } : ""}
          onClick={() => setResponse(Response)}
        >
          {Response}
        </CatButton>
      ))}
    </Box>
  );
}

export default Filter;
