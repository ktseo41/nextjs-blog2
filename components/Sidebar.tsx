import { Box, Drawer, List, ListItem, ModalProps } from "@material-ui/core";
import React, { useState } from "react";

type SidebarProps = {
  open: boolean;
  onClose: ModalProps["onClose"];
};

export default function Sidebar(props: SidebarProps) {
  const { open = false, onClose } = props;
  const [ownOpen, set_open] = useState<boolean>(open);
  return (
    <Drawer anchor="left" open={open} onClose={(event, reason) => onClose(event, reason)}>
      <Box></Box>
      <List>
        <ListItem>test</ListItem>
      </List>
    </Drawer>
  );
}
