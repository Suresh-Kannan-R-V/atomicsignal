import { useTheme } from "@mui/material";
import { styled, Typography } from "@mui/material";

const EmSizeMWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.extraMedium}
      fontWeight={theme.typography.fontWeightMedium}
      color={theme.palette.text[color] || ""}
    >
      {content}
    </Typography>
  );
};

const MSizeRWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.medium}
      fontWeight={theme.typography.fontWeightRegular}
      color={theme.palette.text[color] || ""}
    >
      {content}
    </Typography>
  );
};

const MSizeMWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.medium}
      color={theme.palette.text[color] || ""}
      fontWeight={theme.typography.fontWeightMedium}
    >
      {content}
    </Typography>
  );
};

const LSizeSBWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.large}
      color={theme.palette.text[color] || ""}
      fontWeight={theme.typography.fontWeight.semiBold}
    >
      {content}
    </Typography>
  );
};

const LSizeMWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.large}
      color={theme.palette.text[color] || ""}
      fontWeight={theme.typography.fontWeightMedium}
    >
      {content}
    </Typography>
  );
};

const VSSizeMWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.verySmall}
      fontWeight={theme.typography.fontWeightMedium}
      color={theme.palette.text[color] || ""}
    >
      {content}
    </Typography>
  );
};

const VSSizeRWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.verySmall}
      fontWeight={theme.typography.fontWeightRegular}
      color={theme.palette.text[color] || ""}
    >
      {content}
    </Typography>
  );
};

const SSizeMWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.small}
      fontWeight={theme.typography.fontWeightMedium}
      color={theme.palette.text[color] || ""}
    >
      {content}
    </Typography>
  );
};

const SSizeRWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.small}
      fontWeight={theme.typography.fontWeightRegular}
      color={theme.palette.text[color] || ""}
    >
      {content}
    </Typography>
  );
};

const SSizeSBWeight = ({ content, color }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.small}
      fontWeight={theme.typography.fontWeight.semiBold}
      color={theme.palette.text[color] || ""}
    >
      {content}
    </Typography>
  );
};

export {
  EmSizeMWeight,
  MSizeRWeight,
  MSizeMWeight,
  LSizeSBWeight,
  LSizeMWeight,
  VSSizeMWeight,
  SSizeMWeight,
  SSizeSBWeight,
  SSizeRWeight,
  VSSizeRWeight,
};
