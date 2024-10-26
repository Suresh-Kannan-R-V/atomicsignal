import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Avatar, Box } from "@mui/material";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Dialogue, stylesnew } from "./Style";
import { forwardRef } from "react";
import photo from "../../assets/image1.jpg";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function View({ setPrincing }) {
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
          <Box>
            <Box sx={stylesnew.profile}>
              <Box sx={stylesnew.flex}>
                <Avatar src={photo} sx={stylesnew.photo} />
                hi
              </Box>
              <Box sx={stylesnew.desi}>Visual Designer</Box>
            </Box>
            <Box sx={stylesnew.feed}>
              <Box sx={stylesnew.flex}>
                <Avatar src={photo} sx={stylesnew.photo} />
                hi
              </Box>
              <Box sx={stylesnew.desi1}>Visual</Box>
            </Box>
          </Box>
          <Box sx={stylesnew.res}>Feedback reason will be displayed here</Box>
          <Box sx={stylesnew.respon}>
            Your way of presenting the topic was very good in the client meeting
          </Box>
          <Box sx={stylesnew.dash}></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </DialogContent>
    </Dialogue>
  );
}
