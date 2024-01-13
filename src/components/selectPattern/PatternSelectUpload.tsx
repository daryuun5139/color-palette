// Patternを選択orアップロードComponent
"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import FileUploader from "./FileUploader";
import DefaultPatterns from "./DefaultPatterns";
import ResetPatternButton from "./ResetPatternButton";
import { useRecoilState } from "recoil";
import { patternState } from "@/lib/atoms/pattern-state";

type Props = {};

const PatternSelectUpload = (props: Props) => {
  const [pattern, setPattern] = useRecoilState(patternState);

  return (
    <div>
      <div className="flex items-center gap-3 pb-1">
        <h2 className="text-xl font-bold">Pattern</h2>
        <p className="text-sm">現在のPattern : {pattern}</p>
      </div>
      <div className="flex h-[330px] w-[500px] flex-col rounded-md border-[1px] p-2">
        {/* デフォルトのパターンリスト------------------------------------------------------ */}
        <ScrollArea className="flex h-4/5 w-full">
          <div className="grid grid-cols-3 gap-1">
            <DefaultPatterns />
          </div>
          <ScrollBar />
        </ScrollArea>
        {/* ファイルアップロードエリア------------------------------------------------------ */}
        <div className="flex justify-center">
          <FileUploader />
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <ResetPatternButton />
      </div>
    </div>
  );
};

export default PatternSelectUpload;
