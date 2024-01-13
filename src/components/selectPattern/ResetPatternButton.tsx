// パターンリセットボタン

import { Button } from "@/components/ui/button";
import { useRecoilState } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import {
  randomColorState_Trend,
  randomColorState_Red,
  randomColorState_Blue,
  randomColorState_Yellow,
  randomColorState_Green,
  randomColorState_Orange,
  randomColorState_Other,
} from "@/lib/atoms/random-color-state";

type Props = {};

const ResetPatternButton = (props: Props) => {
  const [pattern, setPattern] = useRecoilState(patternState);
  const [svgFile, setSvgFile] = useRecoilState(svgFileContent);
  const [randomColorListTrend, setRandomColorListTrend] = useRecoilState(randomColorState_Trend);
  const [randomColorListRed, setRandomColorListRed] = useRecoilState(randomColorState_Red);
  const [randomColorListBlue, setRandomColorListBlue] = useRecoilState(randomColorState_Blue);
  const [randomColorListYellow, setRandomColorListYellow] = useRecoilState(randomColorState_Yellow);
  const [randomColorListGreen, setRandomColorListGreen] = useRecoilState(randomColorState_Green);
  const [randomColorListOrange, setRandomColorListOrange] = useRecoilState(randomColorState_Orange);
  const [randomColorListOther, setRandomColorListOther] = useRecoilState(randomColorState_Other);

  //Patternリセットボタン
  const resetPattern = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // pattern,svgFile,randomColorの状態をリセット
    setPattern("");
    setSvgFile("");
    setRandomColorListTrend([[[""]]]);
    setRandomColorListRed([[[""]]]);
    setRandomColorListBlue([[[""]]]);
    setRandomColorListYellow([[[""]]]);
    setRandomColorListGreen([[[""]]]);
    setRandomColorListOrange([[[""]]]);
    setRandomColorListOther([[[""]]]);
    // チェックをすべて外す
    const options = document.querySelectorAll<HTMLInputElement>(`input[name="patternOption"]`);
    for (let i = 0; i < options.length; i++) {
      options[i].checked = false; //プロパティ 'checked' は型 'Element' に存在しません。https://developer.hatenastaff.com/entry/2020/12/12/121212
    }
  };

  return (
    <>
      <Button variant="outline" className="text-sm font-semibold" onClick={resetPattern}>
        Patternをリセット
      </Button>
    </>
  );
};

export default ResetPatternButton;
