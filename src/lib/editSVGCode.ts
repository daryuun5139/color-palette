// アップロードされたSVGFileのHEXコードの状態を抽出するFunction---------------------------------------
export const getHexState = (svgFile: string) => {
  const hexList = svgFile.match(/fill="#([^"]+)"/g);
  const uniqueHexList = [...new Set(hexList)]; //https://tukkytech.com/blog/ts-set-check/

  return { hexList: uniqueHexList, hexListNumber: uniqueHexList.length };
};

// ひとつのpaletteを引数として、ランダムに色を組み合わあせた配列を作成するFunction------------------------
const panelsNum = 10; //作成する配列の数はここで調整。

export const createRandomColorsList = (palette: string[], hexListNumber: number) => {
  const randomColorsList: string[][] = [];
  for (let i = 0; i < panelsNum; i++) {
    const randomColor: string[] = [];
    while (randomColor.length < 4) {
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

type outputCodeList = {
  code: string;
  colorList: string[];
};

// アップロードされたSVGコードを書き換えるFunction（fill="######",<pattern id="Unnamed_Pattern">の部分）
export const editSVGCode = (
  paletteIndex: number,
  hexList: string[],
  svgFile: string,
  randomColorsList: string[][]
) => {
  const outputCodeList: outputCodeList[] = [];
  randomColorsList.map((list, index) => {
    let outputCode = svgFile;
    hexList.forEach((item, index) => {
      const newItem = new RegExp(item, "g");
      outputCode = outputCode.replace(newItem, `fill=#${list[index]}`);
    });
    const newItem02 = new RegExp("Unnamed_Pattern", "g");
    outputCode = outputCode.replace(newItem02, `Unnamed_Pattern_${paletteIndex}_${index}`);

    // outputCodeList.push(outputCode);
    outputCodeList.push({
      code: outputCode,
      colorList: list,
    });
  });
  return outputCodeList;
};
