import { Typography } from "@mui/material";
import { InputCard, OnBoardContainer } from "./onBoard.styles";
import Logo from "../../assets/logo";

const OnBoard = ({ children }) => {
  return (
    <OnBoardContainer>
      <InputCard>
        <Logo />
        {children}
      </InputCard>
    </OnBoardContainer>
  );
};

export default OnBoard;
