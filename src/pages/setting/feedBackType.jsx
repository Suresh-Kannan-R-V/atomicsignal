import { Avatar, Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { styledItem } from "./style";
import { useState } from "react";
import { FeedBackTypes } from "../../components/feedbacktype/feedBackTypes";

export default function FeedBack() {
  return (
    <Grid2
      sx={{ ...styledItem.parentGridSignalStyle, padding: 0, height: "85vh" }}
    >
      <Grid2
        sx={{
          ...styledItem.parentGridSignalStyle,
          border: 0,
          margin: 0,
          overflowX: "auto",
        }}
      >
        <Box sx={styledItem.parentBoxSignalStyle}>
          <Typography sx={styledItem.headSignalStyle}>
            Edit feedback structure type
          </Typography>
          <Button
            variant="contained"
            sx={{ ...styledItem.signalButtonStyle, padding: "3px 20px" }}
          >
            Save
          </Button>
        </Box>
      </Grid2>
      <Typography component="hr" sx={{ border: "1px solid #EBEBEB" }} />
      <FeedBackTypes heading="What type of feedback structure have you implemented or would like to implement?" />
    </Grid2>
  );
}
