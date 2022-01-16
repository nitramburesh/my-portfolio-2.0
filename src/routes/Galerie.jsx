import { GalleryCard } from "../components/GalleryCard";
import { Flex } from "@chakra-ui/react";

export const Galerie = (props) => {
  return (
    <>
      <Flex flexWrap="wrap" gap="25px" justifyContent="space-between" m="20px">
        <GalleryCard
          src="/SBmladez-028.Jpg"
          name="portrety"
          gallery="portrety"
        />
        <GalleryCard src="/SBmladez-028.Jpg" name="sport" gallery="sport" />
        <GalleryCard src="/SBmladez-028.Jpg" name="svatby" gallery="svatby" />
        <GalleryCard
          src="/SBmladez-028.Jpg"
          name="rodinne foceni"
          gallery="rodiny"
        />
      </Flex>
    </>
  );
};
export default Galerie;
