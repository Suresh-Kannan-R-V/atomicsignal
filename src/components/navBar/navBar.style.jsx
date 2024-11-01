import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";

export const Sidebar = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "72px",
  height: "100vh",
  backgroundColor: theme.palette.background.navbgcolor,
}));

export const SidebarHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "25px",
  borderBottom: "1px solid #ccc",
  paddingBottom: "20px",
}));

export const SidebarIcon = styled(Typography)(({ theme }) => ({
  width: "25px",
  height: "25px",
  cursor: "pointer",
}));

export const LogoImage = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

export const Version = styled(Typography)(({ theme }) => ({
  marginTop: "5px",
  fontSize: theme.typography.fontSize.verySmall,
  color: "#ebebeb",
}));

export const SidebarMenu = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBottom: "15px",
}));
