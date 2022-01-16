import React from "react";
import { Box, Grid, Image } from "@chakra-ui/react";
import { Hamburger } from "./Hamburger";
import { setGlobalState, useGlobalState } from "../state/index";
import { Menu } from "./Menu";
import { NavbarLinks } from "./NavbarLinks";
import { useMediaQuery } from "@chakra-ui/react";
import styled from "styled-components";

export const Navbar = (props) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] =
    useGlobalState("isBurgerMenuOpen");
  const [isMobile] = useMediaQuery("(max-width:768px)");
  const NavbarGrid = styled.div`
    display: grid;
    height: 5%;
    background-color: white;
    grid-auto-flow: ${isMobile ? "column" : "row"};
  `;
  const LogoWrapper = styled.div`
    justify-self: ${isMobile ? "start" : "center"};
  `;

  return (
    <>
      {isBurgerMenuOpen ? <Menu /> : <></>}
      <NavbarGrid>
        <LogoWrapper>
          <Image
            src="/byMartinBuresBlack.png"
            alt="logo by Martin Bures"
            height={isMobile ? "80px" : "200px"}
            cursor="pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </LogoWrapper>
        {isMobile && (
          <Box justifySelf="end" alignSelf="center">
            <Hamburger />
          </Box>
        )}
        {!isMobile && (
          <NavbarLinks
            backgroundColor="black"
            color="white"
            p="15px"
            fontSize="20px"
            class="desktop"
            display="grid"
            gridAutoFlow="column"
            justifyContent="space-around"
            gridColumn="1fr 1fr 1fr"
          />
        )}
      </NavbarGrid>
    </>
  );
};
