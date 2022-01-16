import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import firebaseApp from "./firebase/config";
import { ChakraProvider, propNames } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Galerie } from "./routes/Galerie";
import { Cenik } from "./routes/Cenik";
import { Homepage } from "./routes/Homepage";
import { OMne } from "./routes/OMne";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Subgallery } from "./routes/galerie/Subgallery";

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/cenik" element={<Cenik />} />
          <Route path="/omne" element={<OMne />} />
          <Route
            path={`/galerie/portrety`}
            element={<Subgallery gallery="portrety" />}
          />
          <Route
            path="/galerie/sport"
            element={<Subgallery gallery="sport" />}
          />
          <Route
            path="/galerie/svatby"
            element={<Subgallery gallery="svatby" />}
          />
          <Route
            path="/galerie/rodiny"
            element={<Subgallery gallery="rodiny" />}
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
