import { atom } from "recoil";

export const svgFileContent = atom<string>({
  key: "svgFileContent",
  default: "",
});
