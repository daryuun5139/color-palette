// Topページ
import GeneratedPanelList from "@/components/generatedPanelList/GeneratedPanelList";
import HowToUse from "@/components/other/HowToUse";
import NavBar from "@/components/other/NavBar";
import PatternSelectUpload from "@/components/selectPattern/PatternSelectUpload";
import PatternPanel from "@/components/selectPattern/PatternPanel";
import SelectedPanelSlider from "@/components/selectedPanelList/SelectedPanelSlider";
import StartGenerateButton from "@/components/selectPattern/StartGenerateButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="mx-auto flex w-[1100px] flex-col items-center pt-16">
        {/* HowToUse ---------------------------------------------------------------- */}
        <div className="pb-16">
          <HowToUse />
        </div>
        {/* Patternを選択 or アップロード ---------------------------------------------*/}
        <div className="flex w-[950px] flex-col justify-center pb-[100px]">
          <h1 className="pb-5 text-xl font-semibold">
            ① Patternを1つ選択 or アップロードしてください。
          </h1>
          <div className="flex justify-between">
            <PatternPanel />
            <PatternSelectUpload />
          </div>
          <StartGenerateButton />
        </div>
        {/* 気に入った配色のパネルを選択 -------------------------------------------------- */}
        <div className="flex w-[950px] flex-col justify-center pb-[70px]">
          <h1 className="pb-5 text-xl font-semibold">
            ②気に入った配色のパネルを選択してください。
          </h1>
          <GeneratedPanelList />
        </div>
        {/* 選択したパネル一覧 ----------------------------------------------------------- */}
        <div className="lex w-[950px] flex-col justify-center pb-[70px]">
          <h1 className="pb-5 text-xl font-semibold">選択済みパネル一覧</h1>
          <SelectedPanelSlider />
        </div>
      </div>
    </>
  );
}
