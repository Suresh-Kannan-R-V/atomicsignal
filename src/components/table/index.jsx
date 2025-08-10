/* eslint-disable react/prop-types */
import DepartmentTableComponent from "./departmentTablecomponent";
import MembersTableComponent from "./membersTable";
import SignalTableComponent from "./signalsTable";

const MembersTableHeadings = [
  "Name",
  "Designation",
  "Department",
  "Signals",
  "Overall Performance",
  "Reporting to",
  "Role",
  "Email",
  "Experience",
  "Status",
];

const DepartmentTableHeadings = [
  "S.No",
  "Department name",
  "Created on",
  "Modified on",
  "Status",
  "Action",
];
const SignalTableHeadings = [
  { heading: "S.No", position: "relative" },
  { heading: "Signal name", position: "relative" },
  { heading: "Created on", position: "relative" },
  { heading: "Modified on", position: "relative" },
  { heading: "Status", position: "relative" },
  { heading: "Action", position: "sticky" },
];

const MembersTable = ({
  rowData,
  stickyColumnData,
  searchQuery = "",
  setRowData,
  stickyHeadings,
}) => {
  return (
    <MembersTableComponent
      headings={MembersTableHeadings}
      stickyheadings={stickyHeadings}
      rows={rowData}
      setRows={setRowData}
      stickyColumnData={stickyColumnData}
      searchQuery={searchQuery}
    />
  );
};

const DepartmentTable = ({ rowData, setRowData, searchQuery }) => (
  <DepartmentTableComponent
    rows={rowData}
    searchQuery={searchQuery}
    setRows={setRowData}
    headings={DepartmentTableHeadings}
  />
);
const SignalTable = ({ rowData, setRowData, searchQuery, Deactivate }) => (
  <SignalTableComponent
    rows={rowData}
    searchQuery={searchQuery}
    setRows={setRowData}
    headings={SignalTableHeadings}
    Deactivate={Deactivate}
  />
);

export { DepartmentTable, MembersTable, SignalTable };
