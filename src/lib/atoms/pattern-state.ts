import { atom } from "recoil";

export const patternState = atom<string>({
  key: "patternState",
  default: "",
});
