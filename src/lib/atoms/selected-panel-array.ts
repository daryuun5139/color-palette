import { atom } from "recoil";

export type selectedPanelType = {
  code: string;
  colorList: string[];
};

export const selectedPanelArray = atom<selectedPanelType[]>({
  key: "selectedPanelArray",
  default: [],
});
