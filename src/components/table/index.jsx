import MembersTable from "./MembersTable";

const Table = ({
  rowData,
  headings,
  stickyColumnData,
  searchQuery = "",
  setRowData,
  stickyHeadings,
}) => {
  return (
    <MembersTable
      headings={headings}
      stickyheadings={stickyHeadings}
      rows={rowData}
      setRows={setRowData}
      stickyColumnData={stickyColumnData}
      searchQuery={searchQuery}
    />
  );
};

export default Table;
