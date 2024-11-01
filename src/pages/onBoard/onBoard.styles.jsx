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
}));

const InputCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  height: "max-content",
  maxWidth: "400px",
  borderRadius: "12px",
  boxShadow: "0px 8px 20px #0000000A",
  position: "absolute",
  margin: "auto",
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

export { OnBoardContainer, InputCard };
