import React from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { firebaseApp } from "../../src/firebase/config";
import { useGlobalState } from "../../src/state";
import { Image } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";

const Detail = (props) => {
  const [category] = useGlobalState("clickedGallery");

  const storage = getStorage(firebaseApp);
  const folderRef = ref(storage, `/portrety`);
  // const dynamicRef = ref(storage, `${props.portrety}`)
  const storageRef = ref(storage);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const tmpArr = [];

    listAll(folderRef).then((response) => {
      console.log(response);
      response.items.forEach((itemRef) => {
        // tmpArr.push({ id: itemRef.name, path: itemRef.fullPath }),
        getDownloadURL(ref(storage, `${itemRef.fullPath}`)).then((url) => {
          tmpArr.push(url);
          const images = tmpArr.map((img) => (
            <Image width="150px" src={img} key={img} />
          ));
          setImages(images);
        });
      });
    });
  }, []);
  return (
    <div>
      <Navbar />
      {images}{" "}
    </div>
  );
};

export default Detail;
