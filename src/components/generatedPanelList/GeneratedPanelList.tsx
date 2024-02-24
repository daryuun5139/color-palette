// 生成されたパネル一覧
"use client";

// レイアウト系インポート
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// コンポーネント系インポート
import { generatedPanelArray, outputObj02 } from "@/lib/atoms/generated-panel-array";
import { useRecoilState } from "recoil";
import PanelListOfEachColor from "./PanelListOfEachColor";
// 各色パレットインポート
import {
  trendPalettes,
  baseRedPalettes,
  baseBluePalettes,
  baseYellowPalettes,
  baseGreenPalettes,
  baseOrangePalettes,
  baseOtherPalettes,
} from "@/lib/colorData/colorPalettes";

type Props = {};

const GeneratedPanelList = (props: Props) => {
  const [generatedPanel, setGeneratedPanel] = useRecoilState<outputObj02[]>(generatedPanelArray); //生成されたパネルの配列データ

  const trendPanelContent: outputObj02 = generatedPanel[0];
  const redPanelContent: outputObj02 = generatedPanel[1];
  const bluePanelContent: outputObj02 = generatedPanel[2];
  const yellowPanelContent: outputObj02 = generatedPanel[3];
  const greenPanelContent: outputObj02 = generatedPanel[4];
  const orangePanelContent: outputObj02 = generatedPanel[5];
  const otherPanelContent: outputObj02 = generatedPanel[6];

  return (
    <div className="flex flex-col justify-center">
      <h1 className="pb-5 text-xl font-semibold">②気に入った配色のパネルを選択してください。</h1>
      <div>
        <Tabs defaultValue="trend" className="h-[600px] w-full rounded-md border-[1px]">
          <TabsList className="text-black">
            <TabsTrigger value="trend">trend</TabsTrigger>
            <TabsTrigger value="red">red</TabsTrigger>
            <TabsTrigger value="blue">blue</TabsTrigger>
            <TabsTrigger value="yellow">yellow</TabsTrigger>
            <TabsTrigger value="green">green</TabsTrigger>
            <TabsTrigger value="orange">orange</TabsTrigger>
            <TabsTrigger value="other">other</TabsTrigger>
          </TabsList>
          {/* トレンド系統タブ--------------------------------------------------------------- */}
          <TabsContent value="trend" className="h-[510px] pb-2 text-sm">
            <p className="pl-6">気に入った配色のパネルを選択してください</p>
            <ScrollArea className="relative h-full w-full px-2 pt-2">
              <PanelListOfEachColor
                contents={trendPanelContent}
                colorName="trend"
                palettes={trendPalettes}
              />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </TabsContent>
          {/* 赤系統タブ--------------------------------------------------------------- */}
          <TabsContent value="red" className="h-[510px] pb-2 text-sm">
            <p className="pl-6">気に入った配色のパネルを選択してください</p>
            <ScrollArea className="h-full w-full px-2 pt-2">
              <PanelListOfEachColor
                contents={redPanelContent}
                colorName="red"
                palettes={baseRedPalettes}
              />
              <ScrollBar />
            </ScrollArea>
          </TabsContent>
          {/* 青系統タブ--------------------------------------------------------------- */}
          <TabsContent value="blue" className="h-[510px] pb-2 text-sm">
            <p className="pl-6">気に入った配色のパネルを選択してください</p>
            <ScrollArea className="h-full w-full px-2 pt-2">
              <PanelListOfEachColor
                contents={bluePanelContent}
                colorName="blue"
                palettes={baseBluePalettes}
              />
              <ScrollBar />
            </ScrollArea>
          </TabsContent>
          {/* 黃系統タブ--------------------------------------------------------------- */}
          <TabsContent value="yellow" className="h-[510px] pb-2 text-sm">
            <p className="pl-6">気に入った配色のパネルを選択してください</p>
            <ScrollArea className="h-full w-full  px-2 pt-2">
              <PanelListOfEachColor
                contents={yellowPanelContent}
                colorName="yellow"
                palettes={baseYellowPalettes}
              />
              <ScrollBar />
            </ScrollArea>
          </TabsContent>
          {/* 緑系統タブ--------------------------------------------------------------- */}
          <TabsContent value="green" className="h-[510px] pb-2 text-sm">
            <p className="pl-6">気に入った配色のパネルを選択してください</p>
            <ScrollArea className="h-full w-full px-2 pt-2">
              <PanelListOfEachColor
                contents={greenPanelContent}
                colorName="green"
                palettes={baseGreenPalettes}
              />
              <ScrollBar />
            </ScrollArea>
          </TabsContent>
          {/* オレンジ系統タブ--------------------------------------------------------------- */}
          <TabsContent value="orange" className="h-[510px] pb-2 text-sm">
            <p className="pl-6">気に入った配色のパネルを選択してください</p>
            <ScrollArea className="h-full w-full px-2 pt-2">
              <PanelListOfEachColor
                contents={orangePanelContent}
                colorName="orange"
                palettes={baseOrangePalettes}
              />
              <ScrollBar />
            </ScrollArea>
          </TabsContent>
          {/* その他系統タブ--------------------------------------------------------------- */}
          <TabsContent value="other" className="h-[510px] pb-2 text-sm">
            <p className="pl-6">気に入った配色のパネルを選択してください</p>
            <ScrollArea className="h-full w-full px-2 pt-2">
              <PanelListOfEachColor
                contents={otherPanelContent}
                colorName="other"
                palettes={baseOtherPalettes}
              />
              <ScrollBar />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GeneratedPanelList;
