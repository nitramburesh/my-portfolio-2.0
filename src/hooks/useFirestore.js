import { doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useFirestore = (collection) => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((document) => {
          documents.push({ ...document.data(), id: document.id });
        });
        setDocuments(documents);
      });

    return () => unsub();
  }, [collection]);

  return { documents };
};

export default useFirestore;
