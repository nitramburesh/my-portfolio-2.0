import React from "react";
import {
  Accordion,
  Button,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import Category from "../components/Category";
import SendEmailModal from "../components/SendEmailModal";

export const Cenik = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Accordion allowMultiple allowToggle>
        <Category name="Portrét" showPrice photoCount="10" time="60-90" price="1000" onClick={onOpen}>
          <Text>Nezáleží na tom, jestli je pro Tebe focení denní chleba, anebo to bude premiéra před foťákem. Společně vytvoříme skvělý a přirozený fotky, který Ti můžou sloužit jako vzpomínka nebo fresh materiál na sociální sítě.</Text>
          <Text mb="20px">Místo focení je na domluvě - může to být město, příroda, nebo klidně interiér. Focení trvá 60-90 minut a výstupem je 10 fotografií v digitální podobě, které si vybereš z náhledové galerie. </Text>
          <Button position="absolute" right="10px" bottom="10px" onClick={onOpen}> POPTAT </Button>
          <SendEmailModal isOpen={isOpen} onClose={onClose}></SendEmailModal>
        </Category >
        <Category name="Sport">
          <Text mb="20px">
            Sportu se věnuji od mala a miluju na něm naprosto všechno! Jediná věc, která mě mrzí, je, že jsem si ze žádného zápasu nebo turnaje nepřivezl domů žádnou fotku a těžko se na to vzpomíná. Věřím, že každý tým nebo sportovec si může dopřát fotografie v akci. Stejně tak kvalitní turnaj se neobejde bez materiálu, kterým může propagovat další ročník. Jelikož tenhle produkt má opravdu individuální charakter, bude nejlepší, když mi nejdříve představíte svou představu, já na základě toho připravím co nejlepší nabídku a mile rád se postarám o jedinečné sportovní fotografie!
          </Text>
          <Button position="absolute" right="10px" bottom="10px" onClick={onOpen}> POPTAT </Button>
          <SendEmailModal isOpen={isOpen} onClose={onClose}></SendEmailModal>
        </Category>
        <Category name="Chlupáči" showPrice photoCount="10" time="60-90" price="1000" >
          <Text mb="20px">
            Rozkousaný boty nebo mokrej koberec jsou sice zážitek, ale není to vzpomínka navždycky. Spojme síly a vytvořme krásnou chlupatou vzpomínku, která bude klidně moct viset pyšně na zdi a dělat radost stejně jako Tvůj čtyřnohej parťák!
          </Text>
          <Button position="absolute" right="10px" bottom="10px" onClick={onOpen}> POPTAT </Button>
          <SendEmailModal isOpen={isOpen} onClose={onClose}></SendEmailModal>
        </Category>
        <Category name="Plesy">
          <Text mb="20px">
            Když budu na plese já, nemusíš se bát, že Ti unikne jakýkoliv okamžik a můžeš se v klidu odvázat. Já už se postarám o veškerou dokumentaci!
          </Text>
          <Button position="absolute" right="10px" bottom="10px" onClick={onOpen}> POPTAT </Button>
          <SendEmailModal isOpen={isOpen} onClose={onClose}></SendEmailModal>
        </Category>

      </Accordion>
    </>
  );
};

export default Cenik;
