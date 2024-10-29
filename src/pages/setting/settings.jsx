import { Grid2 } from "@mui/material";
import BasicTabs from "../../components/tabbar/tabbar";
import { styledItem } from "./style";
import { Provider } from "react-redux";
import Store from "./store";

export default function Settings() {
  return (
    <Provider store={Store}>
      <Grid2 sx={styledItem.tabsStyle}>
        <BasicTabs />
      </Grid2>
    </Provider>
  );
}
