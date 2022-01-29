
import { Box, IconButton, keyframes } from "@chakra-ui/react";
import { useGlobalState } from "../state/index";

import { NavbarLinks } from "./NavbarLinks";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Menu = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] =
    useGlobalState("isBurgerMenuOpen");

  const appear = keyframes`
    from{
      transform: translateY(-100%);
      opacity: 0%}
    to{
      transform: translateY(0%);
      opacity: 100%}
  `;
  const dissapear = keyframes`
    from{
      transform: translateY(0%);
      opacity: 100%}
    to{
      transform: translateY(-100%);
      opacity: 0%}
  `;

  if (isBurgerMenuOpen)
    return (
      <Box
        zIndex="2"
        position="fixed"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        top="0"
        bottom="0"
        left="0"
        right="0"
        backdropFilter="blur(100px)"
        animation={`${appear} 0.3s ease-in`}
      >
        <IconButton
          background="transparent"
          position="fixed"
          right="15px"
          top="15px"
          onClick={() => {
            setIsBurgerMenuOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" color="black" />
        </IconButton>
        <NavbarLinks
          display="flex"
          m="20px"
          fontSize="40px"
          p="10px"
          flexDirection="column"
          gap="50px"
          justifyContent="center"
          flexGrow="5"
          class="mobile"
        />
        <Box display="flex" gap="50px" alignItems="center" flexGrow="1">
          <ChakraLink
            href={"mailto:martesbur@gmail.com?subject=chces%20delo%3F"}
          >
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </ChakraLink>

          <ChakraLink href={"https://instagram.com/delusionalburesh"}>
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </ChakraLink>
          <ChakraLink href={"https://facebook.com/delusionalburesh/"}>
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </ChakraLink>
        </Box>
      </Box>
    );
};
