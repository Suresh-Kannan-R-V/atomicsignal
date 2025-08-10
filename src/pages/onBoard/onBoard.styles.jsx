import { Box, styled } from "@mui/material";
import backgroundImage from "../../assets/onBoardBackground.svg";
const OnBoardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.onBoard,
  height: "100vh",
  width: "100%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "center",
  backgroundSize: "contain",
  display: "inline-block",
}));

const InputCard = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  height: "max-content",
  maxWidth: "352px",
  borderRadius: "12px",
  boxShadow: "0px 8px 20px #0000000A",
  position: "absolute",
  margin: "auto",
  top: 0,
  bottom: 0,
  left: "16px",
  right: "16px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

export { OnBoardContainer, InputCard };
