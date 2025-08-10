import Logo from "../../assets/logo";
import { InputCard, OnBoardContainer } from "./onBoard.styles";
import PropTypes from "prop-types";

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

OnBoard.propTypes = {
  children: PropTypes.node,
};

export default OnBoard;
