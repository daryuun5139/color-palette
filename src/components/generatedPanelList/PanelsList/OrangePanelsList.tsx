// orange系カラーリストに基づいて生成されるパネルリスト
"use client";

// Recoil系インポート
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import { randomColorState_Orange } from "@/lib/atoms/random-color-state";
// レイアウト系インポート
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// その他インポート
import { baseOrangePalettes } from "@/lib/colorData/colorPalettes";
import SetPatternAndColor, { SetPatternAndColorProps } from "../SetPatternAndColor";

type Props = {};

const OrangePanelsList = (props: Props) => {
  const pattern = useRecoilValue(patternState);
  const svgFile = useRecoilValue(svgFileContent);
  const colorName = "orange";
  const [randomColorListOrange, setRandomColorListOrange] = useRecoilState(randomColorState_Orange);

  return (
    <>
      {pattern && svgFile ? (
        // パターンを選択している場合--------------------------------------------------------------
        <>
          {baseOrangePalettes.map((palette, paletteIndex) => (
            <div key={`${colorName}-palette-${paletteIndex + 1}`}>
              {/* パレットの色一覧------------------------------------- */}
              <div className="flex flex-col pl-4">
                <h2>{`${colorName}-palette-${paletteIndex + 1}`}</h2>
                <div className="flex">
                  {palette.map((color) => (
                    <div
                      key={`${colorName}-palette-${paletteIndex + 1}-${color}`}
                      className="mr-[0.5px] flex h-[30px] w-[30px]"
                      style={{ backgroundColor: `#${color}` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div>
                {/* パネル一覧------------------------------------------- */}
                <ScrollArea className="w-[60%] whitespace-nowrap">
                  {/* scroll in scrollが動作しない問題 */}
                  {randomColorListOrange[paletteIndex] ? (
                    <SetPatternAndColor
                      palette={palette}
                      paletteIndex={paletteIndex}
                      svgFile={svgFile}
                      pattern={pattern}
                      colorName={colorName}
                      randomColorList={randomColorListOrange}
                    /> //https://qiita.com/Yuki-Inui/items/3824562115f1f593919d
                  ) : (
                    <></>
                  )}
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </div>
          ))}
        </>
      ) : (
        // パターンを選択してない場合------------------------------------------------------------
        <>
          <p className="absolute top-1/2 -translate-y-1/2 translate-x-2/3 text-center text-2xl font-semibold">
            Patternを1つ選択 or アップロードし、
            <br />
            パネルの生成を開始してください。
          </p>
        </>
      )}
    </>
  );
};

export default OrangePanelsList;
