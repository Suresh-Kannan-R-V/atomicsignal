/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Box, Collapse, Typography } from "@mui/material";
import { format } from "date-fns";
import { useState } from "react";
import StyledButton from "../../components/button/button";
import {
  AvatarContainer,
  Card,
  CardContentWrapper,
  CollapseContent,
  FeedbackContent,
  FeedbackResponseText,
  FeedbackText,
  FullWord,
  Header,
  HeaderDate,
  HeaderInfo,
  InputRespondBox,
  NotRespondedText,
  Rating,
  RatingAvatar,
  RatingContainer,
  ResponseContainer,
  ResponseInput,
  ResponseStatusText,
  ResponseText,
  Status,
  StatusDate,
  SubmitBox,
  ViewLink,
} from "./profile.style";

const FeedbackCard = ({ teamMembers, feedbackData, word = "Efficitive" }) => {
  const [expanded, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [response, setResponse] = useState("");

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleShowInput = () => {
    setShowInput(true);
  };

  const handleSubmitResponse = () => {
    console.log("Response submitted:", response);
    setResponse("");
    setShowInput(false);
  };

  return (
    <Box>
      {feedbackData?.map((feedback, index) => (
        <Card key={index}>
          <CardContentWrapper expanded={expanded}>
            <Header>
              <Box display={"flex"}>
                <AvatarContainer alt={feedback.name} src="/users.jpg" />
                <HeaderInfo>
                  <Typography fontWeight="bold" fontSize={16}>
                    {feedback.name}
                  </Typography>
                  <HeaderDate>
                    {format(new Date(feedback.date), "dd MMM yyyy, hh:mm a")}
                  </HeaderDate>
                </HeaderInfo>
              </Box>
              <Box>
                <RatingContainer>
                  <RatingAvatar bgcolor="#007C32">
                    <Typography>{feedback.performance[0]}</Typography>
                  </RatingAvatar>
                  <FullWord className="fullWord">
                    {feedback.performance}
                  </FullWord>

                  <Rating>{feedback.rating}</Rating>
                </RatingContainer>
              </Box>
            </Header>
            <FeedbackContent>
              Feedback reason will be displayed here
            </FeedbackContent>
            <FeedbackText>{feedback.feedback}</FeedbackText>
          </CardContentWrapper>

          {teamMembers ? (
            <Status
              isResponse={feedback.response_status}
              expanded={expanded}
              onClick={toggleExpand}
            >
              {feedback.response_status ? (
                <>
                  <Box display="flex">
                    <DoneAllIcon
                      sx={{
                        margin: "3px 8px",
                        fontSize: "20px",
                        color: expanded ? "#665CD7" : "#25C460",
                      }}
                    />
                    <ResponseStatusText>Response submitted</ResponseStatusText>
                    {expanded && (
                      <StatusDate>
                        {format(
                          new Date(feedback.response_submitted_datetime),
                          "dd MMM yyyy, hh:mm a"
                        )}
                      </StatusDate>
                    )}
                  </Box>
                  <ViewLink>{expanded ? "Collapse" : "View"}</ViewLink>
                </>
              ) : (
                <Box display="flex">
                  <ChatOutlinedIcon
                    sx={{
                      margin: "3px 10px 3px 0px",
                      fontSize: "20px",
                      color: "#515151",
                    }}
                  />
                  <NotRespondedText>Not responded yet</NotRespondedText>
                </Box>
              )}
            </Status>
          ) : (
            <ResponseContainer showInput={!showInput}>
              {!showInput ? (
                <SubmitBox color="success" onClick={handleShowInput}>
                  Submit your response
                </SubmitBox>
              ) : (
                <>
                  <InputRespondBox>
                    <ResponseInput
                      component="input"
                      value={response}
                      onChange={handleResponseChange}
                      placeholder="Type your response here..."
                    />
                    <StyledButton
                      variant="contained"
                      onClick={handleSubmitResponse}
                      sx={{ marginTop: "8px" }}
                    >
                      Submit
                    </StyledButton>
                  </InputRespondBox>
                </>
              )}
            </ResponseContainer>
          )}

          <Collapse in={expanded}>
            <CollapseContent>
              <ResponseText>{feedback.response_text}</ResponseText>
              <FeedbackResponseText>
                {feedback.feedback_response}
              </FeedbackResponseText>
            </CollapseContent>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
};

export default FeedbackCard;
