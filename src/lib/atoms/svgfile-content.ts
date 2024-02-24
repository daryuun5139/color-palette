//選択されたPatternのsvgコードを格納

import { atom } from "recoil";

export const svgFileContent = atom<string>({
  key: "svgFileContent",
  default: "",
});
