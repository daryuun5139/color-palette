// 各カラーの生成されたパネル一覧

// Recoil系インポート
import { useRecoilValue } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
// レイアウト系インポート
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// その他インポート
import SetPatternAndColor from "./SetPatternAndColor";
import { outputObj02 } from "@/lib/atoms/generated-panel-array";

type Props = {
  contents: outputObj02;
  colorName: string;
  palettes: string[][];
};

const PanelListOfEachColor = ({ contents, colorName, palettes }: Props) => {
  const pattern = useRecoilValue<string>(patternState); //選択されたPatternの名前(ex,Argyle)
  const svgFile = useRecoilValue<string>(svgFileContent); //選択されたPatternのsvgコード

  return (
    <>
      {pattern && svgFile && contents ? (
        <>
          {palettes.map((palette: string[], paletteIndex: number) => (
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
                  {contents[colorName][paletteIndex] ? (
                    <SetPatternAndColor
                      contents={contents}
                      paletteIndex={paletteIndex}
                      colorName={colorName}
                    />
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

export default PanelListOfEachColor;
