import { Box, Button, Grid2, Typography } from "@mui/material";
import { styledItem } from "./style";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export function Grading() {
  return (
    <Grid2 sx={{ ...styledItem.parentGridSignalStyle, padding: 0 }}>
      <Grid2 sx={{ ...styledItem.parentGridSignalStyle, border: 0, margin: 0 }}>
        <Box sx={styledItem.parentBoxSignalStyle}>
          <Typography sx={styledItem.headSignalStyle}>Edit grading</Typography>
          <Button
            variant="contained"
            sx={{ ...styledItem.signalButtonStyle, padding: "3px 20px" }}
          >
            Save
          </Button>
        </Box>
      </Grid2>
      <Typography component="hr" sx={{ border: "1px solid #EBEBEB" }} />
      <Grid2 sx={{ ...styledItem.parentGridSignalStyle, border: 0, margin: 0 }}>
        <Grid2 sx={{ paddingTop: "0px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              textAlign: "left",
              color: "#484759",
              letterSpacing: "0px",
              fontFamily: "Poppins",
            }}
          >
            Grading is a framework which you can use while giving feedback (Eg.
            Inefficient, Neutral...)
          </Typography>
        </Grid2>
        <Box>
          <Box
            sx={{
              border: "1px solid #EBEBEB",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "450px",
              padding: "12px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  ...styledItem.dataStyle,
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Completely away
              </Typography>
            </Box>
            <CloseRoundedIcon />
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
}
