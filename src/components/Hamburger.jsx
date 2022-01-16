import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setGlobalState, useGlobalState, getGlobalState } from "../state/index";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Box, IconButton } from "@chakra-ui/react";

export const Hamburger = (props) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] =
    useGlobalState("isBurgerMenuOpen");

  return (
    <Box p="0" mr="10px" className="mobile">
      <IconButton
        onClick={() => {
          setIsBurgerMenuOpen(!isBurgerMenuOpen);
        }}
        background="transparent"
        icon={
          !isBurgerMenuOpen && (
            <FontAwesomeIcon icon={faBars} size="2x" color="black" />
          )
        }
      ></IconButton>
    </Box>
  );
};
