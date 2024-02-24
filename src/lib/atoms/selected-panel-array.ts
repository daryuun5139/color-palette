// 生成されたパネル一覧から選ばれたパネル情報の配列を格納

import { atom } from "recoil";

export type selectedPanelType = {
  colorName: string;
  code: string;
  colorList: string[];
};

export const selectedPanelArray = atom<selectedPanelType[]>({
  key: "selectedPanelArray",
  default: [],
});
