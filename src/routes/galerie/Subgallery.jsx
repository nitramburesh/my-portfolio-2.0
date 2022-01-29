import React from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase/config";
import { Center, Image, Spinner, Box } from "@chakra-ui/react";
import { GalleryWrapper } from "../../components/box/GalleryWrapper";
import GoBackBar from "../../components/GoBackBar";

export const Subgallery = ({ galleryPath, name }) => {
  const storage = getStorage(firebaseApp);
  const folderRef = ref(storage, `/${galleryPath}`);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listAll(folderRef).then((response) => {
      response.items.forEach((itemRef) => {
        getDownloadURL(ref(storage, `${itemRef.fullPath}`)).then((url) => {
          setImages((urls) => [...urls, url]);
        });
      });
    });

    setLoading(false);
  }, []);

  const mappedImages = images.map((img) => {
    return (
      <Box className="gallery-item" data-src={img}>
        <Image src={img} key={img.id} className="img-responsive" width="100%" />
      </Box>
    );
  });
  console.log(name);
  const gallery =
    <>
      <GoBackBar>{name}</GoBackBar>
      <GalleryWrapper>
        {mappedImages}
      </GalleryWrapper>;
    </>
  const spinner = (
    <Center m="20%">
      <Spinner size="xl" />
    </Center>
  );

  return <>{loading ? spinner : gallery}</>;
};
