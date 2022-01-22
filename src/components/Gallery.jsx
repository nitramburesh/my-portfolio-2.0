import React, { useEffect, useRef, useState } from "react";
import { getStorage, ref, listAll } from "firebase/storage";
import styled from "styled-components";
import { GalleryWrapper } from "./box/GalleryWrapper";
import { Box, Center, Spinner } from "@chakra-ui/react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

export const Gallery = () => {
  const Image = styled.img`
    margin-bottom: 5px;
  `;
  // code

  const storage = getStorage();
  const storageRef = ref(storage);
  const [imageRef, setImageRef] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const tmpArr = [];
    listAll(storageRef).then((response) => {
      response.items.forEach((itemRef) => {
        tmpArr.push({ id: itemRef.name, path: itemRef.fullPath });
      });
      setImageRef(tmpArr);
      setIsLoading(false);
    });
  }, []);

  const images = imageRef.map((img) => (
    <Box
      className="gallery-item"
      data-src={`https://firebasestorage.googleapis.com/v0/b/my-portfolio-23ec8.appspot.com/o/${img.path}?alt=media&token=b0701d87-6ae0-4519-ae39-787719c0a414`}
    >
      <Image
        width="100%"
        src={`https://firebasestorage.googleapis.com/v0/b/my-portfolio-23ec8.appspot.com/o/${img.path}?alt=media&token=b0701d87-6ae0-4519-ae39-787719c0a414`}
        key={img.id}
        className="img-responsive"
      />
    </Box>
  ));

  const gallery = (
    <GalleryWrapper>
      <LightGallery plugins={[lgZoom, lgThumbnail]} mode="lg-fade">
        {images}
      </LightGallery>
    </GalleryWrapper>
  );

  const spinner = (
    <Center>
      <Box minHeight="50vh">
        <Spinner size="xl" />
      </Box>
    </Center>
  );
  return <>{loading ? spinner : gallery}</>;
};
export default Gallery;
