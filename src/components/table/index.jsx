import DepartmentTableComponent from "./DepartmentTableComponent";
import MembersTableComponent from "./MembersTable";

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

const DepartmentTable = ({}) => <DepartmentTableComponent />;

export { MembersTable, DepartmentTable };
