// red系カラーリストに基づいて生成されるパネルリスト
"use client";

// Recoil系インポート
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import { randomColorState_Red } from "@/lib/atoms/random-color-state";
// レイアウト系インポート
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// その他インポート
import { baseRedPalettes } from "@/lib/colorData/colorPalettes";
import SetPatternAndColor from "../SetPatternAndColor";

type Props = {
  // selectedPattern: () => JSX.Element | undefined;
  // コールシグネチャの設定：typeまたはinterface内で関数型を定義　https://commte.net/nextjs-call-signature
};

const RedPanelsList = () => {
  const pattern = useRecoilValue(patternState);
  const svgFile = useRecoilValue(svgFileContent);
  const colorName = "red";
  const [randomColorListRed, setRandomColorListRed] = useRecoilState(randomColorState_Red);

  return (
    <>
      {pattern && svgFile ? (
        // パターンを選択している場合--------------------------------------------------------------
        <>
          {baseRedPalettes.map((palette, paletteIndex) => (
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
                  {randomColorListRed[paletteIndex] ? (
                    <SetPatternAndColor
                      palette={palette}
                      paletteIndex={paletteIndex}
                      svgFile={svgFile}
                      pattern={pattern}
                      colorName={colorName}
                      randomColorList={randomColorListRed}
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

export default RedPanelsList;
