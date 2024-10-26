import { Drawer } from "@mui/material";
import { Box, height, minWidth, styled } from "@mui/system";
import {
  DrawerBox,
  DrawerCloseButton,
  DrawerContentBox,
} from "./Drawer.styles";
const StyledDrawer = styled(
  ({ minWidth = "30%", content, drawerContent, ...props }) => (
    <Drawer
      PaperProps={{
        sx: {
          minWidth: minWidth,
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
      {...props}
    >
      <DrawerBox minWidth={minWidth}>
        <DrawerCloseButton onClick={props.onClose} />
        <DrawerContentBox>{content}</DrawerContentBox>
      </DrawerBox>
    </Drawer>
  )
)({});

export default StyledDrawer;
