import { Box, Grid2, InputBase, TextField, Typography } from "@mui/material";
import { styledItem } from "./style";
import { useState } from "react";
import { addSignalBody } from "./slices/signalsslice";
import { useDispatch } from "react-redux";

export function EditContent() {
  const [signalName, setSignalName] = useState("");
  const [signalDesc, setSignalDesc] = useState("");
  const dispatch = useDispatch();
  const currentDate = new Date();
  const time = currentDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: "true",
  });
  console.log(time);

  function AddSignal(e) {
    e.preventDefault();
    if (signalName) {
      console.log(signalName);
      setSignalName("");
      const currentDate = new Date();
      const time = currentDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: "true",
      });
      const day = currentDate.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      dispatch(
        addSignalBody({ signalName: signalName, date: day, time: time })
      );
    }
  }
  function AddDescription(e) {
    e.preventDefault();
    if (signalDesc) {
      setSignalDesc("");
    }
  }
  return (
    <Grid2 sx={styledItem.editContentGrid}>
      <Box sx={styledItem.editContentBox}>
        <Typography sx={styledItem.editContentHeading}>
          Name <Typography sx={styledItem.editContentHeadingMust}>*</Typography>
        </Typography>
        <form onSubmit={AddSignal}>
          <InputBase
            fullWidth
            onChange={(e) => setSignalName(e.target.value)}
            value={signalName}
            sx={{ ...styledItem.editContentTextBox, minHeight: "40px" }}
          />
        </form>
      </Box>
      <Box sx={styledItem.editContentBox}>
        <Typography sx={styledItem.editContentHeading}>Description </Typography>
        <form>
          <InputBase
            fullWidth
            multiline
            value={signalDesc}
            onChange={(e) => setSignalDesc(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                AddDescription(event);
              }
            }}
            sx={styledItem.editContentTextBox}
          />
        </form>
      </Box>
    </Grid2>
  );
}
