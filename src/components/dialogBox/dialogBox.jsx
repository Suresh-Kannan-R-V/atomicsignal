import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useState } from "react";
import AlertIconSvg from "../../assets/icons/alerticon";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { handleDeactiveBox } from "../../pages/setting/slices/signalsSlice";

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
    placeItems: "center",
    backgroundColor: bgcolor,
    width: "138px",
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
          placeItems: "center",
          rowGap: "24px",
          padding: "50px 48px",
        }}
      >
        <Box>
          <AlertIconSvg />
        </Box>
        <Box sx={{ width: "304px" }}>
          <Typography
            sx={{
              textAlign: "center",
              maxWidth: "309px",
              height: "48px",
              color: "#353448",
              fontSize: "16px",
              fontFamily: "Poppins",
            }}
          >
            Are you sure, would you like to Deactivate?
          </Typography>
        </Box>
        <Box sx={{ display: "flex", columnGap: "16px" }}>
          <Button
            component="button"
            onClick={() => HandleDialogDeactivation((status = false))}
            color={"rgb(73, 199, 146)"}
            bgcolor={"transparent"}
            border={"1.5px solid "}
          >
            Cancel
          </Button>
          <Button
            component="button"
            onClick={() => HandleDialogDeactivation((status = true))}
            color={"rgb(255, 255, 255)"}
            bgcolor={"rgb(244, 79, 90)"}
            border={"1.5px solid "}
          >
            Deactive
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
