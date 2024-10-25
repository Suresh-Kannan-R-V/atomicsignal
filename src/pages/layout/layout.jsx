import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import VNavBar from "../../components/navbar/navbar";

const Layout = () => {
  return (
    <Box
      sx={{
        height: "97vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <div className="sidebarLayout">
          <VNavBar />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <Outlet />
        </div>
      </div>
    </Box>
  );
};

export default Layout;
