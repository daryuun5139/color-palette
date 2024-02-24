//選択されたPatternの名前(ex,Argyle)を格納

import { atom } from "recoil";

export const patternState = atom<string>({
  key: "patternState",
  default: "",
});
