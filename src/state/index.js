import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  isBurgerMenuOpen: false,
  goBackTo: "",
});

export { setGlobalState, useGlobalState };
