import React from "react";
import { Box, Button, Flex, propNames, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const GoBackBar = ({ children }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/galerie", { replace: true })
  }


  return (
    <Box bgColor="black" height="35px" display="flex" justifyContent="center">
      <Button bgColor="transparent" height="35px" onClick={handleGoBack} position="absolute" left="5px">
        <FontAwesomeIcon icon={faArrowLeft} color="white" />
      </Button>
      <Box alignSelf="center">
        <Text color="white" >
          {children}
        </Text>
      </Box>
    </Box>

  );
}

export default GoBackBar;