import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: theme.palette.text.default,
  border: `solid 1px ${theme.palette.secondary.disabledOutline} !important`,
  borderRadius: "4px !important",
  textTransform: "none",

  "&.Mui-selected": {
    border: `solid 1px ${theme.palette.secondary.main}  !important`,
    backgroundColor: theme.palette.secondary.outlinedHover,
  },
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  gap: "8px",
  flexWrap: "wrap",
  width: "100%",
  "& .MuiToggleButtonGroup-grouped:hover": {
    backgroundColor: "transparent",
  },
});

export { StyledToggleButton, StyledToggleButtonGroup };
