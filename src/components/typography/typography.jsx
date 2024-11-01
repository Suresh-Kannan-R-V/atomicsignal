import { useTheme } from "@mui/material";
import { styled, Typography } from "@mui/material";

const EmSizeMWeight = ({ content }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.extraMedium}
      fontWeight={theme.typography.fontWeightMedium}
    >
      {content}
    </Typography>
  );
};

const MSizeRWeight = ({ content }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.medium}
      fontWeight={theme.typography.fontWeightRegular}
    >
      {content}
    </Typography>
  );
};

const MSizeMWeight = ({ content }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.medium}
      fontWeight={theme.typography.fontWeightMedium}
    >
      {content}
    </Typography>
  );
};

const LSizeSBWeight = ({ content }) => {
  const theme = useTheme();
  return (
    <Typography
      fontSize={theme.typography.fontSize.large}
      fontWeight={theme.typography.fontWeight.semiBold}
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

export { EmSizeMWeight, MSizeRWeight, MSizeMWeight, LSizeSBWeight };
