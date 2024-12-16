import { Box, useTheme } from "@mui/material";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { stylesnew, Profile, Photo } from "../../components/popUp/style";
import { Signalcolour, Flex } from "./style";

function Popupcontainer({
  c,
  nameprofile,
  name,
  signal,
  performance,
  response,
}) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Box sx={styles.body}>
      {c === 0 && (
        <Profile>
          <Flex>
            <Photo src={nameprofile} />
            <Box>{name}</Box>
          </Flex>
          <Box sx={styles.desi}>Visual Designer</Box>
        </Profile>
      )}

      {c === 1 && (
        <Profile>
          <Flex>
            <Photo src={nameprofile} />
            <Box>
              {name}
              <Box sx={styles.desi}>Visual Designer</Box>
            </Box>
          </Flex>
          <Box>
            <FaArrowRightLong />
          </Box>
          <Flex>
            <Photo src={nameprofile} />
            <Box>
              {name}
              <Box sx={styles.desi}>Visual Designer</Box>
            </Box>
          </Flex>
        </Profile>
      )}

      <Box sx={styles.feed}>
        <Flex>
          <Signalcolour performance={performance}>{signal[0]}</Signalcolour>
          {signal}
        </Flex>
        <Box sx={styles.desi1}>{performance}</Box>
      </Box>
      <Box sx={styles.res}>Feedback reason will be displayed here</Box>
      <Box sx={styles.respon}>
        Your way of presenting the topic was very good in the client meeting
      </Box>
      <Box sx={styles.dash}></Box>

      <Box sx={{ ...styles.res, color: "#353448", display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              ...styles.tick,
              color: response === "yes" ? "green" : "black",
            }}
          >
            <IoCheckmarkDoneSharp />
          </Box>
          {response === "yes" ? "Response submitted" : "Response not submitted"}
        </Box>
        {response === "yes" && (
          <Box sx={styles.desi}>31 Jan 2023, 01:30 PM</Box>
        )}
      </Box>

      {response === "yes" && (
        <>
          <Box sx={styles.res}>Thanks! I'll try to improve further 👍🏽</Box>
          <Box sx={styles.respon1}>Happy to hear it from you.</Box>
        </>
      )}
    </Box>
  );
}

export default Popupcontainer;
