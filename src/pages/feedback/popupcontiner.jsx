import { Box } from "@mui/material";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { stylesnew, Profile, Photo } from "../../components/popup/Style";
import { Signalcolour, Flex } from "./Style";

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
        <Profile>
          <Flex>
            <Photo src={nameprofile} />
            <Box>{name}</Box>
          </Flex>
          <Box sx={stylesnew.desi}>Visual Designer</Box>
        </Profile>
      )}

      {c === 1 && (
        <Profile>
          <Flex>
            <Photo src={nameprofile} />
            <Box>
              {name}
              <Box sx={stylesnew.desi}>Visual Designer</Box>
            </Box>
          </Flex>
          <Box>
            <FaArrowRightLong />
          </Box>
          <Flex>
            <Photo src={nameprofile} />
            <Box>
              {name}
              <Box sx={stylesnew.desi}>Visual Designer</Box>
            </Box>
          </Flex>
        </Profile>
      )}

      <Box sx={stylesnew.feed}>
        <Flex>
          <Signalcolour performance={performance}>{signal[0]}</Signalcolour>
          {signal}
        </Flex>
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
