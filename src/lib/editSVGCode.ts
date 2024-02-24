import { output, outputObj } from "./atoms/generated-panel-array";

// SVGコードから重複のないHEXコード配列及び配列の長さを抽出するFunction---------------------------------------
export const getHexState = (svgFile: string) => {
  const hexList = svgFile.match(/fill="#([^"]+)"/g); //svgコード内のすべてのHEXコードを配列として抽出する。
  const uniqueHexList = [...new Set(hexList)]; //new Setを使用し、重複のないhexListを作成する。
  return { hexList: uniqueHexList, hexListNumber: uniqueHexList.length };
};

// 1つのpaletteからランダムに色を組み合わあせた配列を作成するFunction------------------------
const panelsNum = 10; //作成する配列の数はここで調整。
export const createRandomColorsList = (palette: string[], hexListNumber: number) => {
  const randomColorsList: string[][] = [];
  for (let i = 0; i < panelsNum; i++) {
    const randomColor: string[] = [];
    while (randomColor.length < hexListNumber) {
      const randomIndex = Math.floor(Math.random() * palette.length);
      if (!randomColor.includes(palette[randomIndex])) {
        randomColor.push(palette[randomIndex]);
      }
    }
    if (!randomColorsList.includes(randomColor)) {
      randomColorsList.push(randomColor);
    }
  }
  return randomColorsList;
};

// SVGコードを書き換えるFunction
// ①SVGコード内のHexコード(fill="######")をRandomColorsListのHexコードに書き換える。
// ②SVGコード内の<pattern id="Unnamed_Pattern">の部分をパネルごとに独自のものに書き換える。(idが同じだと他のパネルのPatternが反映されてしまう)
export const generateOutput = (
  colorName: string,
  hexList: string[],
  svgFile: string,
  randomColorList: string[][][]
) => {
  const outputList: outputObj[] = [];
  randomColorList.map((palette, paletteIndex) => {
    const outputEachPalette: output[] = [];
    palette.map((list, listIndex) => {
      let outputCode = svgFile;
      hexList.forEach((item, itemIndex) => {
        const newItem = new RegExp(item, "g");
        outputCode = outputCode.replace(newItem, `fill=#${list[itemIndex]}`);
      });
      const newItem02 = new RegExp("Unnamed_Pattern", "g");
      outputCode = outputCode.replace(
        newItem02,
        `Unnamed_Pattern_${colorName}_${paletteIndex}_${listIndex}`
      );
      outputEachPalette.push({
        colorName: colorName,
        code: outputCode,
        colorList: list,
      });
    });
    const outputObj: outputObj = { [paletteIndex]: outputEachPalette };
    outputList.push(outputObj);
  });
  return outputList;
};
