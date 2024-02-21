// パネル生成開始ボタン
"use client";

// Recoil系インポート
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import {
  randomColorState_Trend,
  randomColorState_Red,
  randomColorState_Blue,
  randomColorState_Yellow,
  randomColorState_Green,
  randomColorState_Orange,
  randomColorState_Other,
} from "@/lib/atoms/random-color-state";
// Paletteインポート
import {
  trendPalettes,
  baseRedPalettes,
  baseBluePalettes,
  baseYellowPalettes,
  baseGreenPalettes,
  baseOrangePalettes,
  baseOtherPalettes,
} from "@/lib/colorData/colorPalettes";
// その他インポート
import { createRandomColorsList, editSVGCode, getHexState } from "@/lib/editSVGCode";
import { Button } from "../ui/button";
import { useEffect } from "react";

type Props = {};

const StartGenerateButton = (props: Props) => {
  const pattern = useRecoilValue(patternState);
  const svgFile = useRecoilValue(svgFileContent);
  const { hexList, hexListNumber } = getHexState(svgFile);
  const [randomColorListTrend, setRandomColorListTrend] = useRecoilState(randomColorState_Trend);
  const [randomColorListRed, setRandomColorListRed] = useRecoilState(randomColorState_Red);
  const [randomColorListBlue, setRandomColorListBlue] = useRecoilState(randomColorState_Blue);
  const [randomColorListYellow, setRandomColorListYellow] = useRecoilState(randomColorState_Yellow);
  const [randomColorListGreen, setRandomColorListGreen] = useRecoilState(randomColorState_Green);
  const [randomColorListOrange, setRandomColorListOrange] = useRecoilState(randomColorState_Orange);
  const [randomColorListOther, setRandomColorListOther] = useRecoilState(randomColorState_Other);

  //RandomColor生成ボタン
  const startGenerate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // useEffect(() => {
    // trendPalettesからRandomColorsListを生成-----------------------------------------------
    const trendColorList: string[][][] = [];
    trendPalettes.map((palette, paletteIndex) => {
      //10個のカラーセット
      const colorList = createRandomColorsList(palette, hexListNumber);
      trendColorList.push(colorList);
    });
    setRandomColorListTrend(trendColorList); //https://qiita.com/itachi/items/4184b2afc35b55b45568

    // baseRedPalettesからRandomColorsListを生成----------------------------------------------
    const baseRedColorList: string[][][] = [];
    baseRedPalettes.map((palette, paletteIndex) => {
      //10個のカラーセット
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseRedColorList.push(colorList);
    });
    setRandomColorListRed(baseRedColorList);

    // baseBluePalettesからRandomColorsListを生成----------------------------------------------
    const baseBlueColorList: string[][][] = [];
    baseBluePalettes.map((palette, paletteIndex) => {
      //10個のカラーセット
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseBlueColorList.push(colorList);
    });
    setRandomColorListBlue(baseBlueColorList);

    // baseYellowPalettesからRandomColorsListを生成----------------------------------------------
    const baseYellowColorList: string[][][] = [];
    baseYellowPalettes.map((palette, paletteIndex) => {
      //10個のカラーセット
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseYellowColorList.push(colorList);
    });
    setRandomColorListYellow(baseYellowColorList);

    // baseGreenPalettesからRandomColorsListを生成----------------------------------------------
    const baseGreenColorList: string[][][] = [];
    baseGreenPalettes.map((palette, paletteIndex) => {
      //10個のカラーセット
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseGreenColorList.push(colorList);
    });
    setRandomColorListGreen(baseGreenColorList);

    // baseOrangePalettesからRandomColorsListを生成----------------------------------------------
    const baseOrangeColorList: string[][][] = [];
    baseOrangePalettes.map((palette, paletteIndex) => {
      //10個のカラーセット
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseOrangeColorList.push(colorList);
    });
    setRandomColorListOrange(baseOrangeColorList);

    // baseOtherPalettesからRandomColorsListを生成----------------------------------------------
    const baseOtherColorList: string[][][] = [];
    baseOtherPalettes.map((palette, paletteIndex) => {
      //10個のカラーセット
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseOtherColorList.push(colorList);
    });
    setRandomColorListOther(baseOtherColorList);
    // }, [pattern]);
  };

  return (
    <>
      <Button
        className="mx-auto mt-8 border-2 border-black bg-slate-200 px-8 py-6 text-lg font-bold text-black hover:bg-slate-400 hover:transition-all hover:duration-500"
        onClick={startGenerate}
      >
        パネルの生成を開始する
      </Button>
    </>
  );
};

export default StartGenerateButton;
