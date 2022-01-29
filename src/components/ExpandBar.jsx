import { AccordionItem, AccordionPanel, AccordionButton,Box } from "@chakra-ui/react";

const ExpandBar = ({children, name}) => {
  return ( 
     
 
 <AccordionItem>
          <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
            <Box textAlign="left">
              {name}
            </Box>
          </AccordionButton>
          <AccordionPanel>
            {children}
          </AccordionPanel>
        </AccordionItem>
   );
}
 
export default ExpandBar;