// パターンリセットボタン

import { Button } from "@/components/ui/button";
import { useRecoilState } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";

type Props = {};

const ResetPatternButton = () => {
  const [pattern, setPattern] = useRecoilState<string>(patternState); //選択されたPatternの名前(ex,Argyle)
  const [svgFile, setSvgFile] = useRecoilState<string>(svgFileContent); //選択されたPatternのsvgコード

  //Patternリセットボタン
  const resetPattern = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // pattern,svgFileの状態をリセットする
    setPattern("");
    setSvgFile("");
    // チェックをすべて外す
    const options = document.querySelectorAll<HTMLInputElement>(`input[name="patternOption"]`);
    for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
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
