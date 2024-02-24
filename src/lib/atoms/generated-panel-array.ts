//生成されたパネルの配列データを格納
import { atom } from "recoil";

export type ColorList = {
  [K in string]: string[][][];
};

export type output = {
  colorName: string;
  code: string;
  colorList: string[];
};

export type outputObj = {
  [K in string]: output[];
};

export type outputObj02 = {
  [K in string]: outputObj[];
};

export const generatedPanelArray = atom<outputObj02[]>({
  key: "generatedPanelArray",
  default: [],
});
