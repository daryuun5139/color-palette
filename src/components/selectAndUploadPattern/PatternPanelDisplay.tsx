// 画面左側の選択されたパターンを表示するエリア

"use client";

import { useRecoilValue } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import parse from "html-react-parser";

type Props = {};

const PatternPanelDisplay = () => {
  const svgFile: string = useRecoilValue(svgFileContent); //選択されたPatternのsvgコード
  const pattern: string = useRecoilValue(patternState); //選択されたPatternの名前(ex,Argyle)

  return (
    <>
      {pattern && svgFile ? (
        <div className="panel flex flex-col">
          <div className="relative h-[400px] w-[400px] overflow-hidden rounded-3xl">
            {parse(svgFile)}
          </div>
          <p className="pr-11 text-right text-sm">pattern:{pattern}</p>
        </div>
      ) : (
        <div className="panel flex flex-col">
          <div className="relative h-[400px] w-[400px] border-[1px]">
            <p className="absolute top-1/2 -translate-y-1/2 translate-x-1/2">
              patternを選択してください
            </p>
            <p className="pr-11 text-right text-sm">pattern:{pattern}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PatternPanelDisplay;
