import React from "react";
import { LeftBox, SignupBoxLeft, SignUpPageContainer } from "./signUp.styles";
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../../assets/logo";
import {
  LSizeSBWeight,
  MSizeMWeight,
} from "../../components/typography/typography";

const AlmostThere = () => {
  return (
    <SignUpPageContainer>
      <Grid container spacing={3}>
        <SignupBoxLeft item xs={12} md={6}>
          <LeftBox>
            <Logo fontSize={16} width={210} height={100} />
            <img
              src="/feedback tool.svg"
              alt="Illustration"
              style={{
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
              }}
            />
            <MSizeMWeight
              content={`“I think it’s very important to have a feedback loop, where you’re constantly thinking about what you’ve done and how you could be doing it better.”`}
              color={"secondary"}
            />
            <LSizeSBWeight content={`- Elon Musk`} color={"default"} />
          </LeftBox>
        </SignupBoxLeft>
        <Grid item xs={12} md={6}>
          Almost there!
        </Grid>
      </Grid>
    </SignUpPageContainer>
  );
};

export default AlmostThere;
