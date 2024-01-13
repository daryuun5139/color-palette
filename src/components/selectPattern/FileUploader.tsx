// svgFileアップロード機能component
"use client";

import { useRecoilState } from "recoil";
import { svgFileContent } from "@/lib/atoms/svgfile-content";
import { patternState } from "@/lib/atoms/pattern-state";
import { ChangeEvent } from "react";

type Props = {};

const FileUploader = (props: Props) => {
  const [svgFile, setSvgFile] = useRecoilState(svgFileContent);
  const [pattern, setPattern] = useRecoilState(patternState);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget?.files && event.currentTarget.files[0]) {
      const targetFile = event.currentTarget.files[0];
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
      <input type="file" accept="image/svg" onChange={handleFileChange} />
    </>
  );
};

export default FileUploader;
