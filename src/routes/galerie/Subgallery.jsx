import React from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase/config";
import { Center, Image, Spinner } from "@chakra-ui/react";
import { GalleryWrapper } from "../../components/box/GalleryWrapper";

export const Subgallery = ({ gallery }) => {
  const storage = getStorage(firebaseApp);
  const folderRef = ref(storage, `/${gallery}`);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const tmpArr = [];

    listAll(folderRef).then((response) => {
      response.items.forEach((itemRef) => {
        // tmpArr.push({ id: itemRef.name, path: itemRef.fullPath }),
        getDownloadURL(ref(storage, `${itemRef.fullPath}`)).then((url) => {
          tmpArr.push(url);
          const images = tmpArr.map((img) => (
            <Image pt="5px" src={img} key={img} />
          ));
          setImages(images);
          setLoading(false);
        });
      });
    });
  }, []);
  const spinner = (
    <Center m="50%">
      <Spinner size="xl" />
    </Center>
  );
  return <>{loading ? spinner : <GalleryWrapper>{images}</GalleryWrapper>}</>;
};
