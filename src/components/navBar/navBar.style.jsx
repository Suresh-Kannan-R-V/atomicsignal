import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";

export const Sidebar = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "72px",
  width: "100vw ",
  [theme.breakpoints.up("xs")]: {
    height: "72px",
    width: "100vw ",
    flexDirection: "row",
  },
  [theme.breakpoints.up("sm")]: {
    width: "72px",
    height: "100vh ",
    flexDirection: "column",
  },
  backgroundColor: theme.palette.background.navbgcolor,
}));
export const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("xs")]: { flexDirection: "row", display: "none" },
  [theme.breakpoints.up("sm")]: { flexDirection: "column", display: "block" },
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
  [theme.breakpoints.up("xs")]: { display: "none" },
  [theme.breakpoints.up("sm")]: { display: "block" },
}));

export const SidebarMenu = styled(Box)(({ theme }) => ({
  height: "10vh",
  [theme.breakpoints.up("xs")]: { height: "10vh", flexDirection: "row" },
  [theme.breakpoints.up("sm")]: { height: "100vh", flexDirection: "column" },
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  addingBottom: "15px",
}));
