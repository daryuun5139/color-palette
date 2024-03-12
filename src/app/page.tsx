// Topページ
import GeneratedPanelList from "@/components/generatedPanelList/GeneratedPanelList";
import HowToUse from "@/components/other/HowToUse";
import Header from "@/components/other/NavBar";
import SelectAndUploadPattern from "@/components/selectAndUploadPattern/SelectAndUploadPattern";
import SelectedPanelList from "@/components/selectedPanelList/SelectedPanelList";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto flex flex-col items-center pt-16">
        {/* HowToUse ---------------------------------------------------------------- */}
        <div className="pb-16">
          <HowToUse />
        </div>
        {/* Patternを選択 or アップロード ---------------------------------------------*/}
        <div className="w-[950px] pb-[100px]">
          <SelectAndUploadPattern />
        </div>
        {/* 気に入った配色のパネルを選択 -------------------------------------------------- */}
        <div className="w-[950px] pb-[70px]">
          <GeneratedPanelList />
        </div>
        {/* 選択したパネル一覧 ----------------------------------------------------------- */}
        <div className="w-[950px] pb-[70px]">
          <SelectedPanelList />
        </div>
      </div>
    </>
  );
}
