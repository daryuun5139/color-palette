// パネルの生成を開始するボタン
"use client";

// Recoil系インポート
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import {
  ColorList,
  generatedPanelArray,
  outputObj,
  outputObj02,
  output,
} from "@/lib/atoms/generated-panel-array";
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
import { createRandomColorsList, generateOutput, getHexState } from "@/lib/editSVGCode";
import { Button } from "../ui/button";

type Props = {};

const StartGenerateButton = () => {
  const pattern = useRecoilValue<string>(patternState); //選択されたPatternの名前(ex,Argyle)
  const svgFile = useRecoilValue<string>(svgFileContent); //選択されたPatternのsvgコード
  const [generatedPanel, setGeneratedPanel] = useRecoilState<outputObj02[]>(generatedPanelArray); //生成されたパネルの配列データ
  const { hexList, hexListNumber }: { hexList: string[]; hexListNumber: number } =
    getHexState(svgFile); //SVGコードから重複のないHEXコード配列(hexList)及び配列の長さ(hexListNumber)を抽出

  //パネル生成ボタン
  const startGenerate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // trendPalettesからRandomColorsListを生成-----------------------------------------------
    const trendColorList: string[][][] = [];
    trendPalettes.map((palette, paletteIndex) => {
      const colorList = createRandomColorsList(palette, hexListNumber);
      trendColorList.push(colorList);
    });

    // baseRedPalettesからRandomColorsListを生成----------------------------------------------
    const baseRedColorList: string[][][] = [];
    baseRedPalettes.map((palette, paletteIndex) => {
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseRedColorList.push(colorList);
    });

    // baseBluePalettesからRandomColorsListを生成----------------------------------------------
    const baseBlueColorList: string[][][] = [];
    baseBluePalettes.map((palette, paletteIndex) => {
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseBlueColorList.push(colorList);
    });

    // baseYellowPalettesからRandomColorsListを生成----------------------------------------------
    const baseYellowColorList: string[][][] = [];
    baseYellowPalettes.map((palette, paletteIndex) => {
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseYellowColorList.push(colorList);
    });

    // baseGreenPalettesからRandomColorsListを生成----------------------------------------------
    const baseGreenColorList: string[][][] = [];
    baseGreenPalettes.map((palette, paletteIndex) => {
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseGreenColorList.push(colorList);
    });

    // baseOrangePalettesからRandomColorsListを生成----------------------------------------------
    const baseOrangeColorList: string[][][] = [];
    baseOrangePalettes.map((palette, paletteIndex) => {
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseOrangeColorList.push(colorList);
    });

    // baseOtherPalettesからRandomColorsListを生成----------------------------------------------
    const baseOtherColorList: string[][][] = [];
    baseOtherPalettes.map((palette, paletteIndex) => {
      const colorList = createRandomColorsList(palette, hexListNumber);
      baseOtherColorList.push(colorList);
    });

    const allColorList: ColorList[] = [
      { trend: trendColorList },
      { red: baseRedColorList },
      { blue: baseBlueColorList },
      { yellow: baseYellowColorList },
      { green: baseGreenColorList },
      { orange: baseOrangeColorList },
      { other: baseOtherColorList },
    ];

    const allOutput: outputObj02[] = [];
    allColorList.map((item, index) => {
      const key: string = Object.keys(item)[0];
      const outputList: outputObj[] = generateOutput(key, hexList, svgFile, item[key]);
      const outputObj: outputObj02 = { [key]: outputList };
      allOutput.push(outputObj);
    });
    setGeneratedPanel(allOutput);
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
