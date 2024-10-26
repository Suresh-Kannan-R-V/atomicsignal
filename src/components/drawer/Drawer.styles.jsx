import CloseIcon from "@mui/icons-material/Close";
import { Box, styled } from "@mui/material";

const DrawerBox = styled(Box)(() => ({
  position: "relative",

  height: "100vh",
  display: "flex",
}));

const DrawerContentBox = styled(Box)(() => ({
  width: "100%",
  backgroundColor: "white",
}));

const DrawerCloseButton = styled(CloseIcon)({
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "100px",
  margin: "15px",
  cursor: "pointer",
});

export { DrawerContentBox, DrawerCloseButton, DrawerBox };
