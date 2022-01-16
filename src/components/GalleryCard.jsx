import { Box, VStack, Image, Heading, Flex, Spinner } from "@chakra-ui/react";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { useGlobalState } from "../state/index";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { firebaseApp } from "../firebase/config";

export const GalleryCard = (props) => {
  const storage = getStorage(firebaseApp);
  const folderRef = ref(storage, `/${props.gallery}`);
  const [titleImage, setTitleImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const spinner = <Spinner size="xl" />;

  useEffect(() => {
    listAll(folderRef).then((response) => {
      response.items.find((itemRef) => {
        getDownloadURL(ref(storage, `${itemRef.fullPath}`)).then((url) => {
          // header must be called header.jpg inside firebase storage †o load
          if (itemRef.name === "header.jpg") setTitleImage(url);
          setLoading(false);
        });
      });
    });
  }, []);

  return (
    <Link to={`/galerie/${props.gallery}`}>
      <Box
        cursor="pointer"
        mt="10px"
        pb="10px"
        color="white"
        bgColor="black"
        borderRadius="10px"
        onClick={() => {}}
      >
        <VStack>
          {loading ? (
            spinner
          ) : (
            <Image src={titleImage} borderRadius="10px 10px 0 0 " />
          )}
          <Heading as="h1">{props.name}</Heading>
        </VStack>
      </Box>
    </Link>
  );
};
