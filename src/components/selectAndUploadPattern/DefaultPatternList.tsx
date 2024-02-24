// デフォルトのパターンリスト

import { useRecoilState } from "recoil";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import { patternState } from "@/lib/atoms/pattern-state";
import { ChangeEvent, useEffect } from "react";
import { Triangles } from "./Defaultpatterns/Triangles";
import { Argyle } from "./Defaultpatterns/Argyle";
import { TartanCheck } from "./Defaultpatterns/TartanCheck";
import { ColorfulDot } from "./Defaultpatterns/ColorfulDot";
import { Asanoha } from "./Defaultpatterns/Asanoha";

type Props = {};

const DefaultPatternList = (props: Props) => {
  const [svgFile, setSvgFile] = useRecoilState<string>(svgFileContent); //選択されたPatternのsvgコード
  const [pattern, setPattern] = useRecoilState<string>(patternState); //選択されたPatternの名前(ex,Argyle)

  const PatternNames: string[] = ["Triangles", "Argyle", "TartanCheck", "ColorfulDot", "Asanoha"];

  //Pattern選択ボタン
  const onClick = (event: ChangeEvent<HTMLInputElement>) => {
    setPattern(event.currentTarget.value);
  };

  useEffect(() => {
    switch (pattern) {
      case "Triangles":
        setSvgFile(Triangles);
        break;
      case "Argyle":
        setSvgFile(Argyle);
        break;
      case "TartanCheck":
        setSvgFile(TartanCheck);
        break;
      case "ColorfulDot":
        setSvgFile(ColorfulDot);
        break;
      case "Asanoha":
        setSvgFile(Asanoha);
        break;
    }
  }, [pattern]);

  return (
    <>
      {PatternNames.map((name) => (
        <div className="w-full" key={name}>
          <input
            type="radio"
            id={name}
            className="peer hidden"
            name="patternOption"
            value={name}
            onChange={onClick}
          />
          <label
            htmlFor={name}
            className="flex w-full items-center gap-2 border-slate-300 p-1 hover:cursor-pointer hover:bg-slate-200 peer-checked:border-2 peer-checked:border-slate-300 peer-checked:bg-slate-200"
          >
            <object
              data={`/${name}.svg`}
              type="image/svg+xml"
              className="z-0 h-[50px] w-[50px] border-[1px]"
            >
              {name}
            </object>
            <h2 className="text-left">{name}</h2>
          </label>
        </div>
      ))}
    </>
  );
};

export default DefaultPatternList;
