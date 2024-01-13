// 選択されたパターンを表示するエリア

"use client";

import { useRecoilValue } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import parse from "html-react-parser";

type Props = {};

const PatternPanel = (props: Props) => {
  const svgFile = useRecoilValue(svgFileContent);
  const pattern = useRecoilValue(patternState);

  const selectedPattern = (pattern: string) => {
    if (pattern) {
      return (
        <div className="relative h-[400px] w-[400px] overflow-hidden rounded-3xl">
          {parse(svgFile)}
        </div>
      );
    } else {
      return (
        // patternが選択されていない場合、「patternを選択してください」の表示＆パネル枠線を描画。
        <div className="relative h-[400px] w-[400px] border-[1px]">
          <p className="absolute top-1/2 -translate-y-1/2 translate-x-1/2">
            patternを選択してください
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="panel flex flex-col">
        {selectedPattern(pattern)}
        <p className="pr-11 text-right text-sm">pattern:{pattern}</p>
      </div>
    </>
  );
};

export default PatternPanel;
