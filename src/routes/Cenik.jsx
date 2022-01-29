import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import ExpandBar from "../components/ExpandBar";


export const Cenik = () => {
  return (
    <>
      <Accordion allowMultiple allowToggle>
        <ExpandBar name="Portret">
          s quo blanditiis modi eaque et magnam labore?
        </ExpandBar>
        <ExpandBar name="Sport">
          s quo blanditiis modi eaque et magnam labore?
        </ExpandBar>
        <ExpandBar name="Decka">
          s quo blanditiis modi eaque et magnam labore?
        </ExpandBar>
        <ExpandBar name="Svatby">
          s quo blanditiis modi eaque et magnam labore?
        </ExpandBar>
      </Accordion>
    </>
  );
};

export default Cenik;
