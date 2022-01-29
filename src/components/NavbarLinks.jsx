import React from "react";
import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
      {/* <NavLink href="/" placeSelf="center" pr="10px" className="mobile"> */}
      <NavLink to="/" onClick={hideMenu}>
        Domu
      </NavLink>
      {/* <NavLink to="/Galerie" placeSelf="center" pr="10px"> */}
      <NavLink to="/galerie" onClick={hideMenu}>
        Galerie
      </NavLink>
      {/* <NavLink to="/Cenik" placeSelf="center" pr="10px"> */}
      <NavLink to="/cenik" onClick={hideMenu}>
        Cenik
      </NavLink>
      {/* <NavLink to="/OMne" placeSelf="center" pr="10px"> */}
      <NavLink to="/omne" onClick={hideMenu}>
        O mne
      </NavLink>
    </Box>
  );
};

export default NavbarLinks;
