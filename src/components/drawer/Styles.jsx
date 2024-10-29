import { Button, styled } from "@mui/material";

export const stylesnew = {
  mt: {
    marginTop: "7px",
  },
  mtt: {
    marginTop: "14px",
  },

  active: {
    border: "1px solid #49C792",
    backgroundColor: "#EEFBF6",
  },
};

export const CatButton = styled(Button)(() => ({
  fontSize: "13px",
  border: "1px solid #EBEBEB",
  color: "#353448",
  marginRight: "8px",
  marginTop: "8px",
}));
