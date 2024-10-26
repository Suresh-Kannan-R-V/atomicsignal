import { Box, Grid2, styled, Typography } from "@mui/material";
import React from "react";
import { ProfileBody, ProfileGrid } from "./profile.style";
import ReactSpeedometer from "react-d3-speedometer";

const SpeedometerContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});

const LabelContainer = styled(Box)({
  marginTop: "10px",
  backgroundColor: "#F0F0F0",
  padding: "10px 20px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
});

const LabelText = styled(Typography)({
  fontWeight: 400,
  fontSize: "18px",
  color: "#6F6F6F",
  marginRight: "5px",
});

const LabelValue = styled(Typography)({
  fontWeight: 600,
  fontSize: "18px",
  color: "#2C2C2C",
});

const Profile = () => {
  return (
    <>
      <ProfileBody>
        <Grid2 container>
          <ProfileGrid>
            <SpeedometerContainer>
              <ReactSpeedometer
                width={300}
                height={175}
                value={4}
                minValue={1}
                maxValue={7}
                maxSegmentLabels={0}
                segments={7}
                segmentColors={[
                  "#DE1010",
                  "#F27024",
                  "#F2B824",
                  "#F2EB24",
                  "#AEC934",
                  "#4C9E29",
                  "#007C32",
                ]}
                needleColor="#000"
                needleHeightRatio={0.45}
                textColor="transparent"
                currentValueText=""
                ringWidth={40}
              />
              <LabelContainer>
                <LabelText>Overall</LabelText>
                <LabelValue>Need to improve</LabelValue>
              </LabelContainer>
            </SpeedometerContainer>
          </ProfileGrid>
          <ProfileGrid>sfds</ProfileGrid>
        </Grid2>
      </ProfileBody>
    </>
  );
};

export default Profile;
