// 選択済みパネル一覧を表示
"use client";

// レイアウト系インポート
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// Recoil系インポート
import { useRecoilState } from "recoil";
import { selectedPanelArray, selectedPanelType } from "@/lib/atoms/selected-panel-array";
// その他インポート
import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";
import parse from "html-react-parser";

type Props = {};

const SelectedPanelSlider = (props: Props) => {
  const [selectedPanel, setSelectedPanel] = useRecoilState(selectedPanelArray);

  const removePanelAtIndex = (arr: selectedPanelType[], index: string) => {
    return [...arr.slice(0, Number(index)), ...arr.slice(Number(index) + 1)];
  };

  //selectedPanel削除ボタン
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    const newList = removePanelAtIndex(selectedPanel, event.currentTarget.value);
    setSelectedPanel(newList);
  };

  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border p-3">
        {selectedPanel[0] ? (
          <div className="flex w-max gap-1 space-x-4">
            {selectedPanel.map((panel, index) => {
              return (
                <div
                  className="relative flex w-[180px] pt-2 hover:cursor-pointer hover:bg-slate-200"
                  key={index}
                >
                  <input
                    type="radio"
                    id={`${index}`}
                    className="peer hidden"
                    name="selectedPanel"
                    // value={}
                    // onChange={}
                  />
                  <label
                    htmlFor={`${index}`}
                    className="flex h-full w-full flex-col items-center justify-center border-slate-300 hover:cursor-pointer peer-checked:border-[1px] peer-checked:bg-slate-200"
                  >
                    <div className="h-[150px] w-[150px] overflow-hidden rounded-3xl">
                      {parse(panel.code)}
                    </div>
                    <div className="py-1">
                      {panel.colorList.map((color, colorIndex) => (
                        <div key={`${index}-${colorIndex}`} className="flex items-center">
                          <div
                            className="mr-2 flex h-[10px] w-[10px]"
                            style={{ backgroundColor: `#${color}` }}
                          ></div>
                          <span>HEX : #{color.toUpperCase()}</span>
                        </div>
                      ))}
                    </div>
                  </label>
                  <button
                    onClick={onClick}
                    className="absolute right-[10px] top-0 z-10 w-fit rounded-full border-[1px] border-black bg-white px-2 py-[0.9px] hover:border-2"
                    value={`${index}`}
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex w-max flex-col gap-4 space-x-4 p-4">
            <div className="h-[200px] w-[200px] border-[1px]"></div>
            <p className="text-sm">※ panel listから気に入った配色のパネルを選択してください。</p>
          </div>
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SelectedPanelSlider;
