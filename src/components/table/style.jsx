import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme, align }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: theme.typography.fontSize.medium,
    height: "19px",
    color: theme.palette.text.default,
  },
  [`&.${tableCellClasses.head}`]: {
    fontSize: theme.typography.fontSize.extraMedium,
    color: theme.palette.text.default,
    fontWeight: theme.typography.fontWeight.semiBold,
    textAlign:
      align === "Response" || align === "Reminder" || align === "Feedback"
        ? "center"
        : "left",
    backgroundColor: theme.palette.background.primary,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  td: {
    border: 0,
    padding: "13px 15px",
  },
}));

export const stylesnew = (theme) => ({
  tablefooterc: {
    borderTop: `1px solid ${theme.palette.secondary.tableoutline}`,
    borderBottom: "none",
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSize.small,
    padding: "0",
    margin: "0",
    width: "100vw",
  },

  out: {
    height: "550px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  },
});
