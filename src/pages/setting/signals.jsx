import {
  Avatar,
  Box,
  Button,
  Grid2,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styledItem } from "./style";
import { useEffect, useState } from "react";
import { IosSwitch } from "../../components/switch/iosswitch";
import StyledDrawer from "../../components/drawer/Drawer";
import { EditContent } from "./editcontent";
import { useSelector } from "react-redux";

export function Signals() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [IsEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);
  const [title, setTitle] = useState("");
  useEffect(() => {}, [title]);

  const body = useSelector((state) => state.signalsBody);
  const head = useSelector((state) => state.signalsHead);

  const filteredData = body.filter((data) =>
    data.signalName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Grid2 sx={styledItem.parentGridSignalStyle}>
      <Box sx={styledItem.parentBoxSignalStyle}>
        <Typography sx={styledItem.headSignalStyle}>
          Signals ({filteredData.length})
        </Typography>
        <Stack direction="row" spacing={2}>
          <Paper component="form" sx={styledItem.paperSearchStyle}>
            <SearchIcon sx={styledItem.searchIconStyle} />
            <InputBase
              fullWidth
              placeholder="Search by signal name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={styledItem.searchInputBarStyle}
            />
          </Paper>
          <Button
            variant="contained"
            sx={styledItem.signalButtonStyle}
            onClick={() => {
              setIsEditMemberDrawerOpen(true);
              setTitle("Add Signal");
            }}
          >
            Add signal
          </Button>
        </Stack>
      </Box>
      <Grid2 sx={styledItem.parentGridStyle}>
        <TableContainer sx={styledItem.tableContainerStyle}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {head.map((element, index) => (
                  <TableCell key={index} align={element.LabelAlign}>
                    <Typography sx={styledItem.headStyle}>
                      {element.HeadLabel}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((element, index) => (
                  <TableRow key={index}>
                    <TableCell sx={styledItem.tableCellStyle}>
                      <Typography sx={styledItem.dataStyle}>
                        {index + 1}
                      </Typography>
                    </TableCell>
                    <TableCell sx={styledItem.tableCellStyle}>
                      <Typography sx={styledItem.dataStyle}>
                        {element.signalName}
                      </Typography>
                    </TableCell>
                    <TableCell sx={styledItem.tableCellStyle}>
                      <Typography sx={styledItem.dataStyle}>
                        {element.date}, {element.time}
                      </Typography>
                    </TableCell>
                    <TableCell sx={styledItem.tableCellStyle}>
                      <Typography sx={styledItem.dataStyle}>
                        {element.date}, {element.time}
                      </Typography>
                    </TableCell>
                    <TableCell sx={styledItem.tableCellStyle}>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={1}
                      >
                        <IosSwitch />
                        <Typography>Active</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={styledItem.tableCellStyle} align="center">
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Avatar
                          src="edit.png"
                          onClick={() => {
                            setIsEditMemberDrawerOpen(true);
                            setTitle("Edit Signal");
                          }}
                          sx={styledItem.bodyActionIconStyle}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50, 100]}
          component="div"
          sx={styledItem.tablePagenationStyle}
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid2>
      <StyledDrawer
        title={title}
        content={<EditContent />}
        anchor={"right"}
        bottomLeftButton={{ label: "Save", onClick: () => {} }}
        onClose={() => {
          setIsEditMemberDrawerOpen(false);
        }}
        bottomRightButton={{ label: "Cancel", onClick: () => {} }}
        open={IsEditMemberDrawerOpen}
      />
    </Grid2>
  );
}
