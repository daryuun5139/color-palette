// パネルを表示するコンポーネント

import parse from "html-react-parser";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { selectedPanelArray, selectedPanelType } from "@/lib/atoms/selected-panel-array";
import { outputObj02 } from "@/lib/atoms/generated-panel-array";

export type Props = {
  contents: outputObj02;
  paletteIndex: number;
  colorName: string;
};

const SetPatternAndColor = ({ contents, paletteIndex, colorName }: Props) => {
  const [selectedPanel, setSelectedPanel] = useRecoilState<selectedPanelType[]>(selectedPanelArray); //パネル一覧から選ばれたパネル情報の配列を格納

  const onChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPanel((selectedList) => [
      ...selectedList,
      contents[colorName][paletteIndex][paletteIndex][Number(event.currentTarget.value)],
    ]);
  };

  return (
    <>
      {contents ? (
        <div className="flex w-max gap-1 pb-3 pt-2">
          {contents[colorName][paletteIndex][paletteIndex].map((item, itemIndex) => (
            <div
              key={`${contents[0]}-${paletteIndex}-${itemIndex}`}
              className="w-[150px] pt-2 hover:cursor-pointer hover:bg-slate-200"
            >
              <input
                type="checkbox"
                id={`${contents[0]}-${paletteIndex}-${itemIndex}`}
                className="peer hidden"
                name="palette"
                value={itemIndex}
                onChange={onChecked}
              />
              <label
                htmlFor={`${contents[0]}-${paletteIndex}-${itemIndex}`}
                className="flex h-full w-full flex-col items-center justify-center border-slate-300 hover:cursor-pointer peer-checked:border-[1px] peer-checked:bg-muted"
              >
                <div className="flex h-[120px] w-[120px] overflow-hidden rounded-3xl">
                  {parse(item.code)}
                </div>
                <div className="py-1">
                  {item.colorList.map((color, colorIndex) => (
                    <div
                      key={`${contents[0]}-${paletteIndex}-${itemIndex}-${colorIndex}`}
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
      ) : null}
    </>
  );
};

export default SetPatternAndColor;
