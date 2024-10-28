import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Avatar, Box } from "@mui/material";
import { useState, forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { Dialogue, stylesnew } from "./Style";
import { Flex, Signalcolour } from "../../pages/feedback/Style";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function View({
  setPrincing,
  name,
  signal,
  performance,
  photo,
}) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  return (
    <Dialogue
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogContent>
        <Box sx={stylesnew.head}>
          <Box>View feedback</Box>
          <Box sx={stylesnew.cross}>
            <RxCross2 onClick={handleClose} />
          </Box>
        </Box>
        <Box sx={stylesnew.body}>
          <Box sx={stylesnew.profile}>
            <Box sx={stylesnew.flex}>
              <Avatar src={photo} sx={stylesnew.photo} />
              {name}
            </Box>
            <Box sx={stylesnew.desi}>Visual Designer</Box>
          </Box>
          <Box sx={stylesnew.feed}>
            <Box sx={{ ...stylesnew.flex }}>
              <Signalcolour performance={performance}>{signal[0]}</Signalcolour>
              {signal}
            </Box>
            <Box sx={stylesnew.desi1}>{performance}</Box>
          </Box>
          <Box sx={stylesnew.res}>Feedback reason will be displayed here</Box>
          <Box sx={stylesnew.respon}>
            Your way of presenting the topic was very good in the client meeting
          </Box>
          <Box sx={stylesnew.dash}></Box>

          <Flex sx={{ ...stylesnew.res, color: "#353448" }}>
            <IoCheckmarkDoneSharp />
            Response submitted
          </Flex>
        </Box>
      </DialogContent>
    </Dialogue>
  );
}
