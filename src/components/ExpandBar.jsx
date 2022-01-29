import { AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Box } from "@chakra-ui/react";

const ExpandBar = ({ children, name }) => {
  return (


    <AccordionItem position="relative">
      <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
        <Box textAlign="left" flex="1">
          {name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ExpandBar;