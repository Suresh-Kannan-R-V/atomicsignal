import { Box, InputBase, styled, TextField, Typography } from "@mui/material";
import { SignalTable } from "../../components/table";
import { useState } from "react";
import StyledDrawer from "../../components/drawer/Drawer";
import { StyledFormControl } from "../../components/table/DepartmentTable.styles";
import StyledInputLabel from "../../components/inputLabel/InputLabel";
import StyledTextField from "../../components/textField/TextField";
import StyledTextArea from "../../components/textArea/StyledTextArea";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { addSignalBody, addSignalHead } from "./slices/signalsSlice";

function Signals() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddSignalsOpen, setIsAddSignalsOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      signal: "Communication",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
    {
      id: 2,
      signal: "Efficiency",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
    {
      id: 3,
      signal: "Time Management",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
    {
      id: 4,
      signal: "Attitude",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
    {
      id: 5,
      signal: "Unavailable",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
  ]);
  const [input, setInput] = useState("");
  function HandleChange(e) {
    e.pr;
    setInput(e);
    console.log(input);
  }

  const AddSignalsDrawerForm = () => {
    return (
      <StyledFormControl component="form">
        <StyledInputLabel required>Name</StyledInputLabel>
        <StyledTextField
          placeholder="Type name"
          size="small"
          fullWidth
          onSubmit={(e) => HandleChange(e.target.value)}
        ></StyledTextField>
        <StyledInputLabel>Description</StyledInputLabel>
        <StyledTextArea minRows={7} />
      </StyledFormControl>
    );
  };
  return (
    <SignalsSectionContainer>
      <SignalsHeader>
        <SignalsTitle>Signals ({rows.length})</SignalsTitle>
        <Searchbox />
        <AddButton
          onClick={() => {
            setIsAddSignalsOpen(true);
          }}
        />
      </SignalsHeader>

      <SignalTable
        searchQuery={searchQuery}
        rowData={rows}
        setRowData={setRows}
      ></SignalTable>
      <StyledDrawer
        anchor={"right"}
        bottomLeftButton={{ label: "Add" }}
        title={"Add Signal"}
        content={<AddSignalsDrawerForm />}
        onClose={() => {
          setIsAddSignalsOpen(false);
        }}
        open={isAddSignalsOpen}
      />
    </SignalsSectionContainer>
  );
}

const SignalsSectionContainer = styled(Box)({
  marginTop: "20px",
  padding: "16px",
  backgroundColor: "white",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const SignalsTitle = styled(Typography)({
  fontSize: "16px",
  fontFamily: "Poppins",
  fontWeight: "500",
  whiteSpace: "nowrap",
  gridArea: "heading",
});

const SignalsHeader = styled(Box)({
  display: "grid",
  justifyContent: "space-between",
  alignItems: "center",
  rowGap: "10px",
  overflowX: "auto",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateAreas: `"heading addbutton" "inputbox inputbox"`,
  gridTemplateRows: "auto",
  "@media(min-width:  576px)": {
    gridTemplateAreas: `"heading heading inputbox addbutton"`,
  },
  columnGap: "16px",
});
const AddButton = ({ onClick }) => {
  return (
    <Box
      component="div"
      sx={{
        background: "#49C792 0% 0% no-repeat padding-box",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
        color: "#ffffff",
        fontSize: "16px",
        padding: "8px 40px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflowX: "auto",
        gridArea: "addbutton",
      }}
      onClick={onClick}
    >
      <Typography>Add signal</Typography>
    </Box>
  );
};

const Searchbox = () => {
  return (
    <Box
      sx={{
        border: "1px solid #CACACA",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        padding: "9px ",
        overflowX: "auto",
        gridArea: "inputbox",
      }}
    >
      <SearchIcon
        sx={{
          marginRight: "12px",
          height: "20px",
          width: "20px",
          color: "#888888",
        }}
      />
      <Box
        component="input"
        placeholder="Search by signal name"
        sx={{
          width: "100%",
          height: "50%",
          border: "transparent",
          outline: "none",
          color: "#353448",
          fontSize: "14px",
          paddingRight: "5.92vw",
        }}
      />
    </Box>
  );
};

export default Signals;
