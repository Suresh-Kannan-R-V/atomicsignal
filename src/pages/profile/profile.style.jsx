import styled from "@emotion/styled";
import { Avatar, Box, Grid, Grid2, Typography, Tooltip } from "@mui/material";

export const ProfileBody = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "15px 20px",
  height: "auto",
  backgroundColor: theme.palette.background.default,
}));

export const PerformanceContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.primary,
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "8px",
  height: "460px",
}));
export const SpeedometerContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "scroll",
}));

export const LabelContainer = styled(Box)(({ theme }) => ({
  marginTop: "5px",
  backgroundColor: theme.palette.background.default,
  padding: "10px 20px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight.regular,
  fontSize: theme.typography.fontSize.medium,
  color: theme.palette.text.secondary,
  marginRight: "5px",
}));

export const LabelValue = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight.semiBold,
  fontSize: theme.typography.fontSize.medium,
  color: "#2C2C2C",
}));

export const FeedbackContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  borderRadius: "8px",
  minHeight: "668px",
  padding: "20px 25px",
}));

//PipBar.jsx

export const PipBarStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
  // height: "100%",
  marginTop: "40px",
  backgroundColor: theme.palette.background.primary,
  // overflow: "scroll",
  zIndex: 1,
}));

export const RowContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
}));
export const HoverRowContainer = styled(RowContainer)(({ theme }) => ({
  "&:hover .tooltip": {
    display: "block",
  },
}));
export const FirstLabel = styled(Typography)(({ theme }) => ({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  textAlign: "center",
  fontWeight: theme.typography.fontWeight.semiBold,
  color: "#3D3D3D",
  background: theme.palette.background.default,
}));
export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.icon.secondary,
  fontWeight: theme.typography.fontWeight.regular,
}));
export const CircleBox = styled(Box)({
  display: "flex",
  cursor: "pointer",
  gap: "12px",
});

export const Circle = styled(Box)(({ color }) => ({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: color,
}));

export const TooltipStyle = styled(Tooltip)(({ theme }) => ({
  display: "none",
  position: "absolute",
  top: "30px",
  left: "10%",
  transform: "translateX(-50%)",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.text.subText,
  padding: "8px 15px ",
  borderRadius: "5px",
  fontSize: theme.typography.fontSize.verySmall,
  whiteSpace: "nowrap",
  zIndex: 5,
}));
export const TooltipBox = styled(Box)(({ theme }) => ({
  color: theme.palette.text.default,
  fontSize: theme.typography.fontSize.small,
  fontWeight: theme.typography.fontWeight.medium,
}));

// feedbackprofile

export const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  marginBottom: "16px",
  backgroundColor: theme.palette.background.primary,
  transition: "all 0.3s ease",
}));

export const CardContentWrapper = styled(Box)(({ expanded, theme }) => ({
  margin: "16px",
  marginBottom: "10px",
  paddingBottom: expanded ? "20px" : "0px",
  borderBottom: expanded ? "2px dashed #B9B9B9" : "",
}));

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
  [theme.breakpoints.up("xs")]: { flexDirection: "column" },
  [theme.breakpoints.up("sm")]: { flexDirection: "row" },
}));

export const AvatarContainer = styled(Avatar)({
  marginRight: "8px",
});

export const HeaderInfo = styled(Box)({
  lineHeight: 0,
});

export const HeaderDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subText,
  fontSize: theme.typography.fontSize.verySmall,
  fontWeight: theme.typography.fontWeight.regular,
}));

export const RatingContainer = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5F5F5",
  padding: "5px 10px",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  [theme.breakpoints.up("xs")]: { marginLeft: "0px", maxWidth: "170px" },
  [theme.breakpoints.up("sm")]: { marginLeft: "auto" },

  "&:hover .fullWord": {
    maxWidth: "200px",
    visibility: "visible",
  },
}));

export const RatingAvatar = styled(Box)(({ theme, bgcolor }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: bgcolor,
  color: theme.palette.background.primary,
  width: 24,
  height: 24,
  fontSize: theme.typography.fontSize.small,
  fontWeight: theme.typography.fontWeight.bold,
  borderRadius: "50%",
  overflow: "hidden",
}));

export const FullWord = styled(Box)(({ theme }) => ({
  color: "#484759",
  fontSize: theme.typography.fontSize.small,
  margin: "0px 5px",
  maxWidth: 0,
  [theme.breakpoints.up("xs")]: { maxWidth: 200, visibility: "visible" },
  [theme.breakpoints.up("sm")]: { maxWidth: 0, visibility: "hidden" },
  visibility: "hidden",
  overflow: "hidden",
  transition: "max-width 0.4s ease-in-out, visibility 0.3s 0s",
}));

export const Rating = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize.small,
  color: theme.palette.text.default,
  fontWeight: theme.typography.fontWeight.medium,
}));
export const FeedbackContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.default,
  fontWeight: theme.typography.fontWeight.medium,
}));

export const FeedbackText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize.small,
}));

export const Status = styled(Box)(({ isResponse, expanded, theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: !isResponse
    ? "#F5F5F5"
    : isResponse && !expanded
      ? "#EEFBF6"
      : "",
  padding: "10px",
  height: "20px",
  cursor: "pointer",
  fontSize: theme.typography.fontSize.small,
  color: "#4caf50",
  fontWeight: isResponse ? "bold" : "normal",
}));

export const ResponseStatusText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.default,
  fontWeight: theme.typography.fontWeight.medium,
}));

export const StatusDate = styled(Typography)(({ theme }) => ({
  margin: "2px 15px",
  fontSize: theme.typography.fontSize.small,
  color: theme.palette.text.secondary,
}));

export const NotRespondedText = styled(Typography)(({ theme }) => ({
  color: "#515151",
  fontSize: theme.typography.fontSize.small,
  marginTop: "2px",
}));

export const ViewLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.fontSize.verySmall,
  cursor: "pointer",
  fontWeight: theme.typography.fontWeight.medium,
}));

export const ResponseContainer = styled(Box)(({ showInput, theme }) => ({
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3px 10px",
  background: showInput ? "#EEFBF6" : "",
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeight.medium,
  cursor: "pointer",
}));

export const SubmitBox = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  fontWeight: theme.typography.fontWeight.medium,
}));
export const InputRespondBox = styled(Box)(({ theme }) => ({
  width: "95%",
  display: "flex",
  gap: "10PX",
  marginBottom: "10PX",
}));

export const ResponseInput = styled(Box)(({ theme }) => ({
  marginTop: "8px",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #e0e0e0",
  width: "100%",
}));

export const CollapseContent = styled(Box)(({ theme }) => ({
  color: "textSecondary",
  fontSize: theme.typography.fontSize.small,
  padding: "0px 15px 5px 15px",
  marginBottom: "15px",
}));

export const ResponseText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize.small,
  fontWeight: theme.typography.fontWeight.semiBold,
  color: "textPrimary",
}));

export const FeedbackResponseText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize.small,
  color: theme.palette.text.secondary,
}));
