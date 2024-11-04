import {
  Avatar,
  styled,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Table,
  TableFooter,
  TablePagination,
  tooltipClasses,
  Switch,
  Box,
  FormControl,
} from "@mui/material";

import PencilIconSvg from "../../assets/icons/pencil.jsx";

const TableDiv = styled(Box)({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "white",
  borderLeft: "solid white 15px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12) ",
});

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "white",
  borderRadius: "10px  10px 0px 0px ",
  position: "relative",
  minHeight: "35rem",
  maxHeight: "40rem",
  scrollSnapType: "both mandatory",
  scrollSnapAlign: "start",
});

const StyledBottomTableContainer = styled(TableContainer)({
  backgroundColor: "white",
  borderRadius: "0px 0px 10px  10px",
  zIndex: 10,
  position: "relative",
});

const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize.small,
}));

const StyledTableFooter = styled(TableFooter)({});

const StyledTableRow = styled(TableRow)({});

const StyledTableHead = styled(TableHead)({
  fontWeight: "bold",
  fontFamily: "Poppins",
});

const StyledTableHeading = styled(TableCell)(({ minWidth }) => ({
  fontWeight: "500",
  fontSize: "1rem",
  paddingRight: "20px",
  position: "sticky",
  textWrap: "nowrap",
  top: 0,
  backgroundColor: "white",
  zIndex: 1,
  borderBottom: "none",
  "&:last-child": {
    textAlign: "center",
  },
}));

const StyledTableCell = styled(TableCell)(({ minWidth }) => ({
  fontSize: "1.07em",
  borderBottom: "none",
  paddingRight: "20px",
  cursor: "pointer",
  minWidth: minWidth,
  textWrap: "nowrap",
  "&:last-child": {
    textAlign: "center",
  },
}));

const PencilIconContainer = styled(Box)({
  height: "100%",
  display: "flex",
  justifyContent: "center",
});

const PencilIcon = styled((props) => <img src={PencilIconSvg} {...props} />)({
  color: "#49C792",
  backgroundColor: "#EEFBF6",
  padding: "2px",
  borderRadius: "100px",
});

const ActiveContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const ActionPaginationContainerSeparator = styled("div")({
  width: "calc(100% + 15px)",
  borderBottom: "solid rgba(0, 0, 0, 0.12) 1px",
  position: "absolute",
  bottom: 0,
  transform: "translate(-15px,-52px)",
  zIndex: 11,
});

const ActionHeaderContainerSeparator = styled("div")({
  width: "calc(100% + 15px)",
  borderBottom: "solid rgba(0, 0, 0, 0.12) 1px",
  position: "absolute",
  transform: "translate(-15px,55px)",
  zIndex: 10,
});

const StyledTable = styled(Table)({
  position: "relative",
});

const StyledFormControl = styled(Box)({
  padding: "0px 24px",
  display: "flex",
  gap: "12px",
  flexDirection: "column",
});

export {
  TableDiv,
  StyledTableContainer,
  StyledBottomTableContainer,
  StyledTablePagination,
  StyledTableFooter,
  StyledTableRow,
  StyledTableHead,
  StyledTableHeading,
  StyledTableCell,
  PencilIcon,
  ActionPaginationContainerSeparator,
  ActionHeaderContainerSeparator,
  StyledTable,
  StyledFormControl,
  PencilIconContainer,
  ActiveContainer,
};
