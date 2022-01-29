import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll } from "firebase/storage";
import styled from "styled-components";
import { GalleryWrapper } from "./box/GalleryWrapper";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Gallery = () => {
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
    <SwiperSlide>
      <Image
        width="100%"
        pt="5px"
        src={`https://firebasestorage.googleapis.com/v0/b/my-portfolio-23ec8.appspot.com/o/${img.path}?alt=media&token=b0701d87-6ae0-4519-ae39-787719c0a414`}
        key={img.id}
        className="img-responsive"
      />
    </SwiperSlide>
  ));

  const gallery = <GalleryWrapper>{images}</GalleryWrapper>;

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
