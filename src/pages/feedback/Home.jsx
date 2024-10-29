import React, { useState } from "react";
import { Base, Flex, Head, Heading, stylesnew, Table1 } from "./Style";
import { Box, Tabs, Tab, Divider } from "@mui/material";
import Tome from "./Tome";
import Others from "./Others";
import Title from "../../components/Title/Heading";
import Searchstar from "../../components/Search/Search";
import Fromme from "./fromme";
import StyledButton from "../../components/button/Button";
import { ImportIcon } from "../team/team.styles";
import StyledDrawer from "../../components/drawer/Drawer";
import Filterdrawer from "../../components/drawer/Filter";
import { CiFilter } from "react-icons/ci";
import { Filter } from "../../components/Iconbutton/Style";

function Home() {
  const [active, setActive] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);

  const Hndleclick = (event) => {
    console.log("hi");
    setIsEditMemberDrawerOpen(true);
  };
  const tabs = [
    {
      label: "From me (2)",
      value: "1",
      component: <Fromme searchQuery={searchQuery} />,
    },
    {
      label: "To me (5)",
      value: "2",
      component: <Tome searchQuery={searchQuery} />,
    },
    {
      label: "Other feedbacks",
      value: "3",
      component: <Others searchQuery={searchQuery} />,
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActive(newValue);
  };

  const renderContent = () => {
    const currentTab = tabs.find((tab) => tab.value === active);
    return currentTab ? currentTab.component : null;
  };

  return (
    <Base>
      <Head>
        <Tabs value={active} onChange={handleTabChange} sx={stylesnew.tabs}>
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              label={tab.label}
              sx={stylesnew.tab}
            />
          ))}
        </Tabs>
      </Head>

      <Heading>
        <Title />
        <Flex>
          <Searchstar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Filter onClick={Hndleclick}>
            <CiFilter />
          </Filter>
          <Flex sx={active === "3" ? stylesnew.hide : { display: "none" }}>
            <Divider orientation="horizontal" sx={stylesnew.divider} />
            <StyledButton startIcon={<ImportIcon />} variant="outlined">
              Download
            </StyledButton>
          </Flex>
        </Flex>
      </Heading>

      <Table1>{renderContent()}</Table1>
      <StyledDrawer
        title={"Filters"}
        content={<Filterdrawer activeTab={active} />}
        anchor={"right"}
        bottomLeftButton={{ label: "Apply filter", onClick: () => {} }}
        bottomRightButton={{ label: "Reset" }}
        onClose={() => {
          setIsEditMemberDrawerOpen(false);
        }}
        open={isEditMemberDrawerOpen}
      />
    </Base>
  );
}

export default Home;
