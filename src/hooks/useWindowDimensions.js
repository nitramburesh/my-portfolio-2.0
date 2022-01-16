import React, { useState } from "react";
function App() {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
}
