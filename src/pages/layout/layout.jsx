import { Box, Grid2, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import VNavBar from "../../components/navBar/navBar";

const LayoutContainer = styled(Box)({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("xs")]: { flexDirection: "column" },
  [theme.breakpoints.up("sm")]: { flexDirection: "row" },
  height: "100%",
}));

const SidebarLayout = styled(Box)({});

const MainContent = styled(Grid2)({
  width: "100%",
  height: "100vh",
  overflow: "scroll",
});

const Layout = () => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <VNavBar />
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
