import { Avatar, Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { styledItem } from "./style";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";

export default function FeedBack() {
  const [selectedItem, setSelectedItem] = useState(0);
  const toggleHighlight = (id) => {
    setSelectedItem(id);
  };
  const FeedbackButton = [
    {
      id: 0,
      imageSrc: "/multicast.png",
      imageSrc1: "/multicast1.png",
      feebackText: "Reporting to",
    },
    {
      id: 1,
      imageSrc: "/torrent.png",
      imageSrc1: "/torrent1.png",
      feebackText: "Peer to peer",
    },
    {
      id: 2,
      imageSrc: "/blockchain.png",
      imageSrc1: "/blockchain1.png",
      feebackText: "360°",
    },
  ];
  const FeedbackDesc = [
    "Only reporting managers can give feedback",
    "Team members can give feedback to another team member except the reporting manager",
    "Team members can give feedback to another team member including the reporting manager",
  ];

  return (
    <Grid2
      sx={{ ...styledItem.parentGridSignalStyle, padding: 0, height: "85vh" }}
    >
      <Grid2 sx={{ ...styledItem.parentGridSignalStyle, border: 0, margin: 0 }}>
        <Box sx={styledItem.parentBoxSignalStyle}>
          <Typography sx={styledItem.headSignalStyle}>
            Edit feedback structure type
          </Typography>
          <Button
            variant="contained"
            sx={{ ...styledItem.signalButtonStyle, padding: "3px 20px" }}
          >
            Save
          </Button>
        </Box>
      </Grid2>
      <Typography component="hr" sx={{ border: "1px solid #EBEBEB" }} />
      <Grid2 sx={{ ...styledItem.parentGridSignalStyle, border: 0, margin: 0 }}>
        <Grid2 sx={{ paddingTop: "0px" }}>
          <Typography sx={styledItem.feedbackTypeInfoText}>
            What type of feedback structure have you implemented or would like
            to implement?
          </Typography>
          <Box sx={{ marginTop: "12px", width: "399px" }}>
            <Stack
              direction={{ sm: "row", xs: "column" }}
              alignItems="center"
              spacing={2}
            >
              {FeedbackButton.map((item, index) => {
                return (
                  <>
                    <Box
                      key={index}
                      onClick={() => toggleHighlight(index)}
                      sx={{
                        ...styledItem.feedbackTypeBox,
                        border:
                          index === selectedItem
                            ? "1px solid #49C792"
                            : "1px solid #EBEBEB",
                        background: index === selectedItem ? "#EEFBF6" : "",
                      }}
                    >
                      <Avatar
                        src={
                          selectedItem === index
                            ? item.imageSrc1
                            : item.imageSrc
                        }
                        sx={styledItem.feedbackAvatarBox}
                      />
                      <Typography
                        sx={{
                          ...styledItem.dataStyle,
                          fontSize: "14px",
                          fontWeight: "500",
                          marginTop: "7px",
                        }}
                      >
                        {item.feebackText}
                      </Typography>
                    </Box>
                  </>
                );
              })}
            </Stack>
            <Box sx={styledItem.feedbackInfoBox}>
              <InfoOutlinedIcon
                fontSize="verysmall"
                sx={{ color: "#49C792" }}
              />
              <Typography sx={{ ...styledItem.dataStyle, fontSize: "12px" }}>
                {FeedbackDesc[selectedItem]}
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
