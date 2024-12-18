import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useState } from "react";
import AlertIconSvg from "../../assets/icons/alerticon";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { handleDeactiveBox } from "../../pages/setting/slices/signalsslice";

export default function DialogBox({ color, bgcolor, border, open }) {
  const BodyDatas = useSelector((state) => state.signalsBody);
  // console.log(OpenDialogBox.openDeactive)
  const dispatch = useDispatch();

  const Button = styled(Box)({
    padding: "0.313rem 0.938rem",
    fontSize: "0.875rem",
    fontFamily: "Poppins",
    textTransform: "capitalize",
    fontWeight: 500,
    cursor: "pointer",
    border: border,
    color: color,
    borderRadius: "4px",
    backgroundColor: bgcolor,
    lineHeight: 1.75,
  });
  function HandleDialogDeactivation(status) {
    dispatch(
      handleDeactiveBox({ status: status, index: open + 1, dialog: false })
    );
  }
  const [opened, setOpened] = useState(true);

  return (
    <Dialog
      // onClose={onClose}
      open={BodyDatas[open].dialog}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { sm: "50px 48px", xs: "40px 30px" },
          "@media (max-width: 325px)": {
            padding: "40px 16px",
          },
        }}
      >
        <Box
          sx={{ margin: " 0px 0px 24px 0px", height: "48px", width: "48px" }}
        >
          <AlertIconSvg />
        </Box>
        <Box sx={{ margin: " 0px 0px 32px 0px" }}>
          <Typography
            sx={{
              textAlign: "center",
              maxWidth: "304px",
              color: "#353448",
              fontSize: "16px",
              fontFamily: "Poppins",
            }}
          >
            Are you sure, would you like to Deactivate?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "-webkit-fill-available",
          }}
        >
          <Button
            component="button"
            onClick={() => HandleDialogDeactivation((status = false))}
            color={"rgb(73, 199, 146)"}
            bgcolor={"transparent"}
            border={"1.5px solid "}
            sx={{
              minWidth: { sm: "138px", xs: "100px" },
              "@media (min-width: 425px)": { minWidth: "138px" },
            }}
          >
            Cancel
          </Button>
          <Button
            component="button"
            onClick={() => HandleDialogDeactivation((status = true))}
            color={"rgb(255, 255, 255)"}
            bgcolor={"rgb(244, 79, 90)"}
            border={"1.5px solid "}
            sx={{
              minWidth: { sm: "138px", xs: "100px" },
              "@media (min-width: 425px)": { minWidth: "138px" },
            }}
          >
            Deactive
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
