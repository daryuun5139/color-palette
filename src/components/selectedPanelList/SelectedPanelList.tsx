// 選択済みパネル一覧を表示するエリア
"use client";

// レイアウト系インポート
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// Recoil系インポート
import { useRecoilState } from "recoil";
import { selectedPanelArray, selectedPanelType } from "@/lib/atoms/selected-panel-array";
// その他インポート
import React, { ChangeEvent, MouseEvent, useEffect } from "react";
import parse from "html-react-parser";

type Props = {};

const SelectedPanelList = () => {
  const [selectedPanel, setSelectedPanel] = useRecoilState<selectedPanelType[]>(selectedPanelArray); //パネル一覧から選ばれたパネル情報

  const removePanelAtIndex = (arr: selectedPanelType[], index: string) => {
    return [...arr.slice(0, Number(index)), ...arr.slice(Number(index) + 1)];
  };

  //selectedPanel削除ボタン
  const removePanel = (event: MouseEvent<HTMLButtonElement>) => {
    const newList = removePanelAtIndex(selectedPanel, event.currentTarget.value);
    setSelectedPanel(newList);
  };

  const copyToClipboard = (colorIndex: number) => {
    if (document) {
      let targetText = document
        .querySelector<HTMLInputElement>(`#copyText${colorIndex}`)!
        .value.toUpperCase();
      let tooltipCopy = document.querySelector<HTMLInputElement>(`[data-item="copy${colorIndex}"]`);
      navigator.clipboard.writeText(targetText!).then(
        (success) => {
          tooltipCopy!.setAttribute("data-text", "copied");
          setTimeout(() => tooltipCopy!.setAttribute("data-text", "copy"), 2000);
        },
        (error) => alert("テキストのコピーに失敗")
      );
    }
  };

  //Hexコードコピーボタン
  const copyCode = (event: MouseEvent<HTMLInputElement>) => {
    let colorIndex = event.currentTarget.getAttribute("data-index");
    copyToClipboard(Number(colorIndex));
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="pb-5 text-xl font-semibold">選択済みパネル一覧</h1>
      <div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border p-3">
          {selectedPanel[0] ? (
            <div className="flex w-max gap-1 space-x-4">
              {selectedPanel.map((panel, index) => {
                return (
                  <div className="relative flex w-[180px] flex-col items-center pt-2" key={index}>
                    <div className="h-[150px] w-[150px] overflow-hidden rounded-3xl">
                      {parse(panel.code)}
                    </div>
                    <div className="gap-1 py-1">
                      {panel.colorList.map((color, colorIndex) => (
                        <div
                          key={`${index}-${colorIndex}`}
                          className="tooltipCopy relative flex flex-col items-center rounded-sm px-2 hover:cursor-pointer hover:bg-slate-200"
                          data-text="copy"
                          data-item={`copy${colorIndex}`}
                        >
                          <input
                            type="button"
                            id={`copyText${colorIndex}`}
                            className="peer hidden"
                            value={color}
                            data-index={colorIndex}
                            onClick={copyCode}
                          />
                          <label
                            htmlFor={`copyText${colorIndex}`}
                            className="flex h-full w-full  items-center justify-center  hover:cursor-pointer"
                          >
                            <div
                              className="mr-2 flex h-[10px] w-[10px]"
                              style={{ backgroundColor: `#${color}` }}
                            ></div>
                            <span className="text-lg">HEX : #{color.toUpperCase()}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={removePanel}
                      className="tooltipDelete absolute right-[10px] top-0 z-10 w-fit rounded-full border-[1px] border-black bg-white px-2 py-[0.9px] hover:bg-slate-100"
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
    </div>
  );
};

export default SelectedPanelList;
