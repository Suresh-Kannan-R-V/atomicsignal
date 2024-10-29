import { InputLabel, styled } from "@mui/material";

const StyledInputLabel = styled(InputLabel)({
  "& .MuiInputLabel-asterisk": {
    color: "red",
  },
  fontSize: "13px", // 13px is enough , it is correct for all
});

export default StyledInputLabel;
