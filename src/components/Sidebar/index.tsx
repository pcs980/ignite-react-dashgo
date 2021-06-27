import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from "@chakra-ui/react";

import { SidebarNav } from "./SidebarNav";
import { useDrawer } from "../../contexts/DrawerContext";

export function Sidebar() {
  const { isOpen, onClose } = useDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  function handleCloseDrawer() {

  }

  if (isDrawerSidebar) {
    return (
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent
            bg='gray.800'
            padding='4'
          >
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      as='aside'
      w='64'
      mr='8'
    >
      <SidebarNav />
    </Box>
  );
}
