import React, { useState, useEffect } from "react";
import { Divider, Typography } from "@mui/material";
import CollabrationIconMale from "../../assets/icons/collaborator_male.svg";
import CollabrationIcon from "../../assets/icons/collabrating_circle.svg";
import ManagerIcon from "../../assets/icons/manager.svg";
import StyledChip from "../chip/Chip";
import StyledSvgIcon from "../svgicon/SvgIcon";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import {
  ManagerAvatar,
  OthersContainer,
  ProfileAvatar,
  ProfileCardContainer,
  ProfileIconsAndLabelsContainer,
  ProfileIconsLabel,
  ProfileInfoAndOthersContainer,
  ProfileInfoBox,
  ProfileName,
  ResetPasswordContainer,
  UserNameAndPeriodOfServiceContainer,
  AddDeleteButtonContainer,
  AddButton,
  DeleteButton,
} from "./ProfileCard.styles";

const ProfileData = {
  userData: {
    name: "Jennifer",
    period_of_service: "3 yrs 6 Mon",
  },
  others: [
    {
      name: "Human Resources",
      icon: CollabrationIcon,
    },
    {
      name: "Talent Manager",
      icon: CollabrationIconMale,
    },
    {
      image: "path/to/manager_image.jpg",
      name: "Samuel Guererro",
      icon: ManagerIcon,
    },
  ],
};

const ProfileCard = ({ isSetting = false, profilepage }) => {
  const [profileImage, setProfileImage] = useState("");

  // Load profile image from local storage on component mount
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  // Reference to the file input for programmatic click
  const fileInputRef = React.useRef(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        localStorage.setItem("profileImage", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage("");
    localStorage.removeItem("profileImage");
  };

  return (
    <ProfileCardContainer profilepage={profilepage}>
      <ProfileInfoBox>
        <ProfileAvatar
          alt={ProfileData.userData.name}
          src={profileImage || ""}
          variant="rounded"
        >
          <Typography sx={{ fontSize: "50px" }}>
            {" "}
            {!profileImage && ProfileData.userData.name[0]}
          </Typography>
        </ProfileAvatar>

        {!isSetting && (
          <AddDeleteButtonContainer>
            {!profileImage && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                <AddButton onClick={() => fileInputRef.current.click()}>
                  <LinkedCameraOutlinedIcon
                    style={{ color: "#49C792", fontSize: "20px" }}
                  />
                </AddButton>
              </>
            )}
            {profileImage && (
              <DeleteButton onClick={handleDeleteImage}>
                <DeleteOutlinedIcon
                  style={{ color: "#F44F5A", fontSize: "20px" }}
                />
              </DeleteButton>
            )}
          </AddDeleteButtonContainer>
        )}

        <ProfileInfoAndOthersContainer>
          <UserNameAndPeriodOfServiceContainer>
            <ProfileName>{ProfileData.userData.name}</ProfileName>
            <StyledChip
              variant="filled"
              label={ProfileData.userData.period_of_service}
            />
          </UserNameAndPeriodOfServiceContainer>

          <OthersContainer>
            {ProfileData.others.map((data, index) => (
              <ProfileIconsAndLabelsContainer key={index}>
                <StyledSvgIcon height={"16px"} width={"16px"} src={data.icon} />
                {data.image && <ManagerAvatar src={data.image} />}
                <ProfileIconsLabel>{data.name}</ProfileIconsLabel>
              </ProfileIconsAndLabelsContainer>
            ))}
          </OthersContainer>
        </ProfileInfoAndOthersContainer>
      </ProfileInfoBox>

      {isSetting && (
        <>
          <Divider />
          <ResetPasswordContainer>Reset password</ResetPasswordContainer>
        </>
      )}
    </ProfileCardContainer>
  );
};

export default ProfileCard;
