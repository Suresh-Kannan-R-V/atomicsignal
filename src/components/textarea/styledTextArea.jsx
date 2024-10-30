import { styled, TextareaAutosize } from "@mui/material";

const StyledTextArea = styled(TextareaAutosize)(({theme})=>({
  border: "solid lightgray 1px",
  borderRadius: "4px",
  resize: "none",
  "&:focus": {
    outline: ` solid ${theme.palette.secondary.main} 2px`,
  },
}));

export default StyledTextArea;
