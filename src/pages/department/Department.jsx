import { Box, styled, Typography } from "@mui/material";
import { DepartmentTable } from "../../components/table";
import { useState } from "react";
import SearchBox from "../../components/searchbox/SearchBox";
import StyledButton from "../../components/button/Button";

const Department = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [rows, setRows] = useState([
    {
      id: 1,
      department: "Design",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
    {
      id: 2,
      department: "Product",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
    {
      id: 3,
      department: "Management",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
  ]);
  return (
    <DepartmentSectionContainer>
      <DepartmentHeader>
        <SignalsTitle>Departments ({rows.length})</SignalsTitle>
        <DepartmentHeaderTools>
          <SearchBox
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder={"Search by department name"}
            minWidth={300}
            fullWidth
            size="small"
          />
          <StyledButton
            sx={{ minWidth: "166px", minHeight: "40px" }}
            variant="contained"
          >
            Add department
          </StyledButton>
        </DepartmentHeaderTools>
      </DepartmentHeader>

      <DepartmentTable
        searchQuery={searchQuery}
        rowData={rows}
        setRowData={setRows}
      ></DepartmentTable>
    </DepartmentSectionContainer>
  );
};

const DepartmentSectionContainer = styled(Box)({
  margin: "20px",
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
  fontWeight: "550",
});

const DepartmentHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const DepartmentHeaderTools = styled(Box)({
  display: "flex",
  gap: "16px",
  alignItems: "center",
});

export default Department;
