import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useGlobalState } from "../state/index";

export const NavbarLinks = (props) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] =
    useGlobalState("isBurgerMenuOpen");
  const hideMenu = () => {
    setIsBurgerMenuOpen(false);
  };
  return (
    <Box
      m={props.m}
      fontSize={props.fontSize}
      p={props.p}
      color={props.color}
      className={props.class}
      display={props.display}
      flexDirection={props.flexDirection}
      gap={props.gap}
      justifyContent={props.justifyContent}
      flexGrow={props.flexGrow}
      gridAutoFlow={props.gridAutoFlow}
      gridColumn={props.gridColumn}
      backgroundColor={props.backgroundColor}
    >
      {/* <Link href="/" placeSelf="center" pr="10px" className="mobile"> */}
      <Link to="/" onClick={hideMenu}>
        Domu
      </Link>
      {/* <Link to="/Galerie" placeSelf="center" pr="10px"> */}
      <Link to="/galerie" onClick={hideMenu}>
        Galerie
      </Link>
      {/* <Link to="/Cenik" placeSelf="center" pr="10px"> */}
      <Link to="/cenik" onClick={hideMenu}>
        Cenik
      </Link>
      {/* <Link to="/OMne" placeSelf="center" pr="10px"> */}
      <Link to="/omne" onClick={hideMenu}>
        O mne
      </Link>
    </Box>
  );
};

export default NavbarLinks;
