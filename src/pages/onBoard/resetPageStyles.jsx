import styled from "@emotion/styled";
import { Box, Grid2, InputLabel, Typography } from "@mui/material";

export const StyledGrid = styled(Grid2)({ width: "50%" });
export const StyledBox = styled(Box)(({ paddingTop }) => ({
  width: "352px",
  paddingTop: paddingTop,
}));

export const StyledInputBox = styled(Box)(({}) => ({
  border: "none",
  borderRadius: "4px",
  padding: "8px 12px",
  width: "100%",
  fontSize: "14px",
  fontFamily: "Poppins",
  fontWeight: "600",
  outline: "none",
}));

export const StyledInputGrid = styled(Grid2)({
  border: "1px solid #EBEBEB",
  width: "352px",
  borderRadius: "4px",
});

export const StyledButton = styled(Box)(({}) => ({
  borderRadius: "4px",
  backgroundColor: "#49C792",
  fontSize: "14px",
  color: "#FFFFFF",
  fontFamily: "Poppins",
  textAlign: "center",
  letterSpacing: "0px",
  fontWeight: 500,
  padding: "10px 120px",
  display: "inline-block",
  marginTop: "24px",
  whiteSpace: "nowrap",
}));

export const StyledInputLabel = styled(InputLabel)({
  "& .MuiInputLabel-asterisk": {
    color: "#F44F5A",
  },
  color: "#262C33",
  fontSize: "12px",
  display: "inline-block",
});

export const StyledTextSemiBold = styled(Typography)(({ fontSize }) => ({
  fontSize: fontSize,
  fontWeight: 600,
  textAlign: "left",
  fontFamily: "Poppins",
  color: "#0E1824",
  letterSpacing: "0px",
  display: "inline-block",
}));

export const StyledTextRegular = styled(Typography)(({ fontSize }) => ({
  fontSize: fontSize,
  textAlign: "left",
  fontFamily: "Poppins",
  color: "#5C6266",
  letterSpacing: "0px",
  width: "335px",
}));
