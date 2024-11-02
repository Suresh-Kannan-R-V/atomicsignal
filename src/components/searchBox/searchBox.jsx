import { styled, TextField, useTheme } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBox = styled((props) => (
  <TextField
    sx={{
      width: "20.2vw",
    }}
    slotProps={{
      input: {
        startAdornment: <SearchIcon sx={{ fontSize: "20px" }} />,
      },
    }}
    variant={"outlined"}
    {...props}
  />
))(({ theme, minWidth, width }) => ({
  "& .MuiOutlinedInput-root": {
    background: "white",
    minWidth,
    width,
    padding: "0",
    gap: "0.3rem",
    paddingLeft: "10px",
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
  "& .MuiOutlinedInput-input": {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSize.small,
  },
  "& .MuiOutlinedInput-input:focus": {
    border: "none",
  },
}));

const SearchIcon = styled(SearchOutlinedIcon)({
  color: "#888888",
});

export default SearchBox;
