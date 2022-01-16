import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  isBurgerMenuOpen: false,
  clickedGallery: "",
});

export { setGlobalState, useGlobalState };
