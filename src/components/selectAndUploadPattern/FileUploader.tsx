// svgFileアップロード機能component

import { useRecoilState } from "recoil";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import { patternState } from "@/lib/atoms/pattern-state";
import { ChangeEvent } from "react";

type Props = {};

const FileUploader = (props: Props) => {
  const [svgFile, setSvgFile] = useRecoilState<string>(svgFileContent); //選択されたPatternのsvgコード
  const [pattern, setPattern] = useRecoilState<string>(patternState); //選択されたPatternの名前(ex,Argyle)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      const targetFile: File = event.currentTarget.files[0];
      const reader = new FileReader();
      if (targetFile) {
        reader.readAsText(targetFile);
      }
      reader.addEventListener(
        "load",
        () => {
          if (reader.result && typeof reader.result === "string") {
            setSvgFile(reader.result);
            setPattern(targetFile.name);
          }
        },
        false
      );
    }
  };

  return (
    <>
      <input type="file" accept="image/svg" onChange={handleFileChange} aria-label="FileUpload" />
    </>
  );
};

export default FileUploader;
