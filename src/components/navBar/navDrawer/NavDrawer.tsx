import React from "react";
import themes from "../../../themes/themes.module.scss";
import { Button, Box } from "@chakra-ui/react";
import { router } from "../../../router";
import { Link } from "@chakra-ui/react";
import { CgCloseO } from "react-icons/cg";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import "./NavDrawer.scss";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody background={themes.primaryBlue}>
          <CgCloseO
            style={{ position: "absolute", right: 10, top: 10 }}
            size={30}
            color={themes.primaryOrange}
            onClick={onClose}
          />
          <Box pt={20} display={"flex"} flexDirection={"column"}>
            <Link fontSize={28} mb={4} color={themes.white}>
              Home
            </Link>
            <Link fontSize={28} mb={4} color={themes.white}>
              Black Market
            </Link>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default NavDrawer;
