import { Checkbox, styled } from "@mui/material";

const CheckBox = styled(Checkbox)({
  "&.Mui-checked": {
    color: "#49C792",
  },
  padding: 5,
  fontSize: "1.5rem",
});

export default CheckBox;
