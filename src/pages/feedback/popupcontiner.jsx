import { Box, Avatar } from "@mui/material";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { stylesnew } from "../../components/popup/Style";
import { Signalcolour } from "./Style";

function Popupcontainer({
  c,
  nameprofile,
  name,
  signal,
  performance,
  response,
}) {
  return (
    <Box sx={stylesnew.body}>
      {c === 0 && (
        <Box sx={stylesnew.profile}>
          <Box sx={stylesnew.flex}>
            <Avatar src={nameprofile} sx={stylesnew.photo1} />
            <Box>{name}</Box>
          </Box>
          <Box sx={stylesnew.desi}>Visual Designer</Box>
        </Box>
      )}

      {c === 1 && (
        <Box sx={stylesnew.profile}>
          <Box sx={stylesnew.flex}>
            <Avatar src={nameprofile} sx={stylesnew.photo1} />{" "}
            {/* Fixed to use nameprofile */}
            <Box>
              {name}
              <Box sx={stylesnew.desi}>Visual Designer</Box>
            </Box>
          </Box>
          <Box sx={{ color: "#948DE3" }}>
            <FaArrowRightLong />
          </Box>
          <Box sx={stylesnew.flex}>
            <Avatar src={nameprofile} sx={stylesnew.photo1} />{" "}
            {/* Fixed to use nameprofile */}
            <Box>
              {name} {/* Used 'name' instead of 'to' to be consistent */}
              <Box sx={stylesnew.desi}>Visual Designer</Box>
            </Box>
          </Box>
        </Box>
      )}

      <Box sx={stylesnew.feed}>
        <Box sx={stylesnew.flex}>
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

      <Box sx={{ ...stylesnew.res, color: "#353448", display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              ...stylesnew.tick,
              color: response === "yes" ? "green" : "black",
            }}
          >
            <IoCheckmarkDoneSharp />
          </Box>
          {response === "yes" ? "Response submitted" : "Response not submitted"}
        </Box>
        {response === "yes" && (
          <Box sx={stylesnew.desi}>31 Jan 2023, 01:30 PM</Box>
        )}
      </Box>

      {response === "yes" && (
        <>
          <Box sx={stylesnew.res}>Thanks! I'll try to improve further 👍🏽</Box>
          <Box sx={stylesnew.respon1}>Happy to hear it from you.</Box>
        </>
      )}
    </Box>
  );
}

export default Popupcontainer;
