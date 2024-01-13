// 関数系インポート
import { getHexState, editSVGCode } from "@/lib/editSVGCode";
// その他インポート
import parse from "html-react-parser";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { selectedPanelArray } from "@/lib/atoms/selected-panel-array";

export type SetPatternAndColorProps = {
  palette: string[];
  paletteIndex: number;
  svgFile: string;
  pattern: string;
  colorName: string;
  randomColorList: string[][][];
};

// patternの中身に応じてCodeをセットする
const SetPatternAndColor = ({
  palette,
  paletteIndex,
  svgFile,
  pattern,
  colorName,
  randomColorList,
}: SetPatternAndColorProps): JSX.Element | undefined => {
  const [selectedPanel, setSelectedPanel] = useRecoilState(selectedPanelArray);
  const { hexList } = getHexState(svgFile);
  const outputCodeList = editSVGCode(paletteIndex, hexList, svgFile, randomColorList[paletteIndex]);

  //https://qiita.com/FumioNonaka/items/3ed6b562a20f6d4abb2b
  //https://qiita.com/seira/items/8a170cc950241a8fdb23
  //https://reffect.co.jp/react/react-typescript-event
  const onChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPanel((selectedList) => [
      ...selectedList,
      outputCodeList[Number(event.target.value)],
    ]);
  };

  return (
    <div className="flex w-max gap-1 pb-3 pt-2">
      {outputCodeList.map((output, outputIndex) => (
        //https://zenn.dev/takayuri/articles/d57f5708afcaaa
        <div
          key={`${colorName}-${paletteIndex}-${outputIndex}`}
          className="w-[150px] pt-2 hover:cursor-pointer hover:bg-slate-200"
        >
          <input
            type="checkbox"
            id={`${colorName}-${paletteIndex}-${outputIndex}`}
            className="peer hidden"
            name="palette"
            value={outputIndex}
            onChange={onChecked}
          />
          <label
            htmlFor={`${colorName}-${paletteIndex}-${outputIndex}`}
            className="flex h-full w-full flex-col items-center justify-center border-slate-300 hover:cursor-pointer peer-checked:border-[1px] peer-checked:bg-muted"
          >
            {/* patternが選択されている場合は枠線を表示しない。 */}
            <div className="flex h-[120px] w-[120px] overflow-hidden rounded-3xl">
              {parse(output.code)}
            </div>
            <div className="py-1">
              {output.colorList.map((color, colorIndex) => (
                <div
                  key={`${colorName}-${paletteIndex}-${outputIndex}-${colorIndex}`}
                  className="flex items-center"
                >
                  <div
                    className="mr-2 flex h-[10px] w-[10px]"
                    style={{ backgroundColor: `#${color}` }}
                  ></div>
                  <span>HEX : #{color.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default SetPatternAndColor;
