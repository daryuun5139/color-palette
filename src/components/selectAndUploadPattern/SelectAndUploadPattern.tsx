// 「① Patternを1つ選択 or アップロードしてください。」エリア

import PatternSelectUpload from "@/components/selectAndUploadPattern/PatternSelectUpload";
import StartGenerateButton from "@/components/selectAndUploadPattern/StartGenerateButton";
import PatternPanelDisplay from "@/components/selectAndUploadPattern/PatternPanelDisplay";

type Props = {};

const SelectAndUploadPattern = (props: Props) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="pb-5 text-xl font-semibold">
        ① Patternを1つ選択 or アップロードしてください。
      </h1>
      <div className="flex justify-between">
        <PatternPanelDisplay />
        <PatternSelectUpload />
      </div>
      <StartGenerateButton />
    </div>
  );
};

export default SelectAndUploadPattern;
