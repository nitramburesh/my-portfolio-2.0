import React from "react";
import {
  Accordion,
  Button,
  Box,
  Text
} from '@chakra-ui/react'
import ExpandBar from "../components/ExpandBar";


export const Cenik = () => {
  return (
    <>
      <Accordion allowMultiple allowToggle>
        <ExpandBar name="Portret" >

          <Text>Nezáleží na tom, jestli je pro Tebe focení denní chleba, anebo to bude premiéra před foťákem. Společně vytvoříme skvělý a přirozený fotky, který Ti můžou sloužit jako vzpomínka nebo fresh materiál na sociální sítě. Místo focení je na domluvě - může to být město, příroda, nebo klidně interiér. Focení trvá 60-90 minut a výstupem je 10 fotografií v digitální podobě. Ty si vybereš s náhledové galerie, která bude k dispozici co nejdříve po focení.</Text>
          <Button position="absolute" right="10px" bottom="10px"> POPTAT </Button>
          <Text fontSize="2xl"><b>Cena: 1000,-</b></Text>
          <Text>Fotografie navíc: 100,-</Text>
          <Text>Čas navíc: 250,-</Text>
        </ExpandBar>
        <ExpandBar name="Sport">
          <Text pb="20px">
            Sportu se věnuji od mala a miluju na něm naprosto všechno! Jediná věc, která mě mrzí, je, že jsem si ze žádného zápasu nebo turnaje nepřivezl domů žádnou fotku a těžko se na to vzpomíná. Věřím, že každý tým nebo sportovec si může dopřát fotografie v akci. Stejně tak kvalitní turnaj se neobejde bez materiálu, kterým může propagovat další ročník. Jelikož tenhle produkt má opravdu individuální charakter, bude nejlepší, když mi nejdříve představíte svou představu, já na základě toho připravím co nejlepší nabídku a mile rád se postarám o jedinečné sportovní fotografie!
          </Text>
          <Button position="absolute" right="10px" bottom="10px"> POPTAT </Button>
        </ExpandBar>
        <ExpandBar name="Decka">
          <Text pb="20px">
            orem ipsum dolor sit amet consectetur, adipisicing elit. Earum corrupti nobis sed. Eaque nostrum praesentium rem ad vel, aperiam quo, porro, enim quibusdam molestiae quidem fuga quos sint possimus? Ad.
            Quod quos rem quibusdam molestias. Excepturi eligendi voluptate totam, fuga perferendis culpa assumenda eaque. Voluptas assumenda, doloremque tenetur earum aut itaque labore possimus odit debitis facere obcaecati temporibus quis repudiandae.
            At sequi sapiente, magni impedit ullam sed nisi porro repellat! Vitae at nemo officia sapiente voluptate voluptas rem cupiditate aspernatur sit delectus quisquam ipsa ullam, doloribus eius, earum quod eum!
          </Text>
          <Button position="absolute" right="10px" bottom="10px"> POPTAT </Button>
        </ExpandBar>
        <ExpandBar name="Svatby">
          <Text pb="20px">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum corrupti nobis sed. Eaque nostrum praesentium rem ad vel, aperiam quo, porro, enim quibusdam molestiae quidem fuga quos sint possimus? Ad.
            Quod quos rem quibusdam molestias. Excepturi eligendi voluptate totam, fuga perferendis culpa assumenda eaque. Voluptas assumenda, doloremque tenetur earum aut itaque labore possimus odit debitis facere obcaecati temporibus quis repudiandae.
            At sequi sapiente, magni impedit ullam sed nisi porro repellat! Vitae at nemo officia sapiente voluptate voluptas rem cupiditate aspernatur sit delectus quisquam ipsa ullam, doloribus eius, earum quod eum!

          </Text>
          <Button position="absolute" right="10px" bottom="10px"> POPTAT </Button>
        </ExpandBar>
      </Accordion>
    </>
  );
};

export default Cenik;
