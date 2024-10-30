import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Avatar, Box, styled } from "@mui/material";
import { useState, forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { Body, Dialogue, Popuphead, stylesnew } from "./Style";
import { Flex, Signalcolour } from "../../pages/feedback/style";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const View = styled(
  ({ setPrincing, title = "", childern, height, width, ...props }) => (
    // const [open, setOpen] = useState(true);

    // const handleClose = () => {
    //   setOpen(false);
    //   setPrincing(false);
    // };
    <Dialogue
      height={height}
      width={width}
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogContent>
        <Popuphead>
          <Box>{title}</Box>
          <Box sx={stylesnew.cross}>
            <RxCross2 onClick={handleClose} />
          </Box>
        </Popuphead>
        <Body>{childern}</Body>
      </DialogContent>
    </Dialogue>
  )
)({});

export default view;
