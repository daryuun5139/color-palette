// カラーリストに基づいて生成されるパネルリスト

"use client";

// レイアウト系インポート
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// コンポーネント系インポート
import TrendPanelsList from "./PanelsList/TrendPanelsList";
import RedPanelsList from "./PanelsList/RedPanelsList";
import BluePanelsList from "./PanelsList/BluePanelsList";
import GreenPanelsList from "./PanelsList/GreenPanelsList";
import YellowPanelsList from "./PanelsList/YellowPanelsList";
import OrangePanelsList from "./PanelsList/OrangePanelsList";
import OtherPanelsList from "./PanelsList/OtherPanelsList";

type Props = {};

const GeneratedPanelList = (props: Props) => {
  return (
    <div>
      <Tabs defaultValue="trend" className="h-[600px] w-full rounded-md border-[1px]">
        <TabsList>
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
            <TrendPanelsList />
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </TabsContent>
        {/* 赤系統タブ--------------------------------------------------------------- */}
        <TabsContent value="red" className="h-[510px] pb-2 text-sm">
          <p className="pl-6">気に入った配色のパネルを選択してください</p>
          <ScrollArea className="h-full w-full px-2 pt-2">
            <RedPanelsList />
            <ScrollBar />
          </ScrollArea>
        </TabsContent>
        {/* 青系統タブ--------------------------------------------------------------- */}
        <TabsContent value="blue" className="h-[510px] pb-2 text-sm">
          <p className="pl-6">気に入った配色のパネルを選択してください</p>
          <ScrollArea className="h-full w-full px-2 pt-2">
            <BluePanelsList />
            <ScrollBar />
          </ScrollArea>
        </TabsContent>
        {/* 黃系統タブ--------------------------------------------------------------- */}
        <TabsContent value="yellow" className="h-[510px] pb-2 text-sm">
          <p className="pl-6">気に入った配色のパネルを選択してください</p>
          <ScrollArea className="h-full w-full  px-2 pt-2">
            <YellowPanelsList />
            <ScrollBar />
          </ScrollArea>
        </TabsContent>
        {/* 緑系統タブ--------------------------------------------------------------- */}
        <TabsContent value="green" className="h-[510px] pb-2 text-sm">
          <p className="pl-6">気に入った配色のパネルを選択してください</p>
          <ScrollArea className="h-full w-full px-2 pt-2">
            <GreenPanelsList />
            <ScrollBar />
          </ScrollArea>
        </TabsContent>
        {/* オレンジ系統タブ--------------------------------------------------------------- */}
        <TabsContent value="orange" className="h-[510px] pb-2 text-sm">
          <p className="pl-6">気に入った配色のパネルを選択してください</p>
          <ScrollArea className="h-full w-full px-2 pt-2">
            <OrangePanelsList />
            <ScrollBar />
          </ScrollArea>
        </TabsContent>
        {/* その他系統タブ--------------------------------------------------------------- */}
        <TabsContent value="other" className="h-[510px] pb-2 text-sm">
          <p className="pl-6">気に入った配色のパネルを選択してください</p>
          <ScrollArea className="h-full w-full px-2 pt-2">
            <OtherPanelsList />
            <ScrollBar />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GeneratedPanelList;
