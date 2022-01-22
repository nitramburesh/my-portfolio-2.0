import React from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase/config";
import { Center, Image, Spinner, Box } from "@chakra-ui/react";
import { GalleryWrapper } from "../../components/box/GalleryWrapper";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

export const Subgallery = ({ galleryPath }) => {
  const storage = getStorage(firebaseApp);
  const folderRef = ref(storage, `/${galleryPath}`);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const tmpArr = [];

    listAll(folderRef).then((response) => {
      response.items.forEach((itemRef) => {
        // tmpArr.push({ id: itemRef.name, path: itemRef.fullPath }),
        console.log(itemRef.fullPath);
        getDownloadURL(ref(storage, `${itemRef.fullPath}`)).then((url) => {
          tmpArr.push(url);
          const images = tmpArr.map((img) => (
            <Box className="gallery-item" data-src={img}>
              <Image
                className="img-responsive"
                width="100%"
                pt="5px"
                src={img}
                key={img}
              />
            </Box>
          ));
          setImages(images);
          setLoading(false);
        });
      });
    });
  }, []);

  const gallery = (
    <GalleryWrapper>
      <LightGallery plugins={[lgZoom]} mode="lg-fade">
        {images}
      </LightGallery>
    </GalleryWrapper>
  );

  const spinner = (
    <Center m="20%">
      <Spinner size="xl" />
    </Center>
  );

  return <>{gallery}</>;
};
