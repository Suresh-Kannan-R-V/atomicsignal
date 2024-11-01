import { Typography } from "@mui/material";
import { InputCard, OnBoardContainer } from "./onBoard.styles";
import Logo from "../../assets/logo";
const OnBoard = ({ content }) => {
  return (
    <OnBoardContainer>
      <InputCard>
        <Logo />
        {content}
      </InputCard>
    </OnBoardContainer>
  );
};

export default OnBoard;
