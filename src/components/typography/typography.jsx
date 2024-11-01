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

export { EmSizeMWeight, MSizeRWeight, MSizeMWeight };
