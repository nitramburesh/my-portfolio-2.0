import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <Box mt="50px" bgColor="grey" p="30px">
      <Flex gap="10%" justifyContent="center">
        <ChakraLink href={"mailto:martesbur@gmail.com?subject=chces%20delo%3F"}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </ChakraLink>

        <ChakraLink href={"https://instagram.com/delusionalburesh"}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </ChakraLink>
        <ChakraLink href={"https://facebook.com/delusionalburesh/"}>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </ChakraLink>
      </Flex>
    </Box>
  );
};
