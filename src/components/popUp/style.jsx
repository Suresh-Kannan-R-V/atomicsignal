import { Avatar, Box, Dialog, styled } from "@mui/material";

export const Dialogue = styled(Dialog)(({ theme, width, height }) => ({
  "& .MuiDialogContent-root": {
    padding: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  "& .MuiDialogActions-root": {
    padding: 0,
  },
  "& .MuiPaper-root": {
    height: typeof height === "string" ? height : `${height}px`,
    width: typeof width === "string" ? width : `${width}px`,
    minHeight: "400px",
    minWidth: "500px",
  },
}));

export const Photo = styled(Avatar)(({ theme }) => ({
  width: 35,
  height: 35,
}));

export const Popuphead = styled(Box)(({ theme }) => ({
  height: "63px",
  padding: "0 24px",
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.default,
  fontWeight: theme.typography.fontWeight.semiBold,
  justifyContent: "space-between",
  borderBottom: `1px solid ${theme.palette.secondary.disabledOutline}`,
}));

export const Profile = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.onBoard,
  height: "53px",
  borderRadius: "4px 4px 0px 0px",
  display: "flex",
  fontWeight: theme.typography.fontWeight.semiBold,
  width: "436px",
  padding: "0 8px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Body = styled(Box)(({ theme }) => ({
  padding: "16px 24px",
}));

export const stylesnew = (theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  cross: {
    fontSize: theme.typography.fontSize.extraLarge,
    cursor: "pointer",
  },

  feed: {
    backgroundColor: theme.palette.background.primary,
    border: `1px solid ${theme.palette.secondary.disabledOutline}`,
    height: "40px",
    borderRadius: "0 0 4px 4px",
    fontSize: theme.typography.fontSize.small,
    color: theme.palette.text.label,
    display: "flex",
    padding: "0 8px",
    width: "435px",
    alignItems: "center",
    justifyContent: "space-between",
  },

  photo: {
    width: 27,
    height: 27,
  },

  desi: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSize.verySmall,
    fontWeight: theme.typography.fontWeight.medium,
  },

  desi1: {
    color: theme.palette.text.default,
    fontWeight: theme.typography.fontWeight.semiBold,
  },

  res: {
    fontSize: theme.typography.fontSize.small,
    fontWeight: theme.typography.fontWeight.semiBold,
    marginTop: "12px",
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
  },

  respon: {
    color: theme.palette.text.secondary,
    marginTop: "7px",
    height: "41px",
    fontSize: theme.typography.fontSize.small,
  },

  respon1: {
    color: theme.palette.text.secondary,
    marginTop: "5px",
    fontSize: theme.typography.fontSize.small,
  },

  dash: {
    borderTop: `2px dashed ${theme.palette.secondary.disable}`,
    marginTop: "15px",
  },

  tick: {
    color: theme.palette.text.tick,
    fontSize: theme.typography.fontSize.medium,
    display: "flex",
    marginRight: "10px",
    alignItems: "center",
  },
});
